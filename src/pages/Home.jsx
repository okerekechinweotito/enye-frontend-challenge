import { Heading, Pane, Spinner } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import "../components/Profile.css";
import "../components/Pagination.css";
import ReactPaginate from "react-paginate";
import "./home.css";

const Home = () => {
  const [profiles, setProfiles] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("None");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((res) => res.json())
      .then((res) => setProfiles(res.records.profiles))
      .catch((err) => console.log(err));
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * 20;

  const filteredProfiles = profiles
    // eslint-disable-next-line array-callback-return
    ?.filter((profile) => {
      if (filterBy === "None") {
        if (
          profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.LastName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return profile;
        }
      }
      if (
        filterBy === "Male" ||
        filterBy === "Female" ||
        filterBy === "Prefer to skip"
      ) {
        if (
          (profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.LastName.toLowerCase().includes(
              searchTerm.toLowerCase()
            )) &&
          profile.Gender === filterBy
        ) {
          return profile;
        }
      }
      if (
        filterBy === "cc" ||
        filterBy === "money order" ||
        filterBy === "check"
      ) {
        if (
          (profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.LastName.toLowerCase().includes(
              searchTerm.toLowerCase()
            )) &&
          profile.PaymentMethod === filterBy
        ) {
          return profile;
        }
      }
    });
  const pageCount = Math.ceil(filteredProfiles?.length / 20);

  if (!profiles) {
    return (
      <Pane
        height={700}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size={70} />
      </Pane>
    );
  }

  return (
    <Pane>
      <Heading textAlign="center" size={900} marginY={20}>
        <div className="title">Enye Customer Profiles</div>
      </Heading>
      <Pane>
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent=""
          alignItems="center"
        >
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SelectBar filterBy={filterBy} setFilterBy={setFilterBy} />
        </Pane>
        <Pane className="grid">
          {filteredProfiles.slice(offset, offset + 20).map((profile) => (
            <Profile profile={profile} />
          ))}
        </Pane>
      </Pane>
      <Pane
        display="flex"
        justifyContent="flex-end"
        marginRight={10}
        marginBottom={10}
      >
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Pane>
    </Pane>
  );
};

export default Home;
