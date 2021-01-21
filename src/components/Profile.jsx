import {
  GlobeIcon,
  DesktopIcon,
  GlobeNetworkIcon,
  SocialMediaIcon,
  DollarIcon,
  CreditCardIcon,
  FollowerIcon,
  ChangesIcon,
  PersonIcon,
  Card,
  Heading,
  Link,
  PhoneIcon,
  Tab,
  TabNavigation,
  MapMarkerIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import "./Profile.css";
import { Pane, Text, EnvelopeIcon } from "evergreen-ui";

const Profile = ({ profile }) => {
  const tabs = ["Payment", "Location", "Others"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Card
        width={"95%"}
        border="default"
        boxSizing="border-box"
        margin={10}
        padding={10}
        className="grid-div"
        elevation={3}
      >
        <Pane display="flex">
          <Pane display="flex" flexDirection="column">
            <Heading>
              <li>
                <PersonIcon marginRight={5} size={25} color={"white"} />
                {profile.FirstName} {profile.LastName}
              </li>
            </Heading>
            <Text size={400}>
              {" "}
              <li>
                <FollowerIcon marginRight={5} size={25} color={"white"} />@
                {profile.UserName}
              </li>
            </Text>
            <Text size={400}>
              {" "}
              <li>
                {" "}
                <ChangesIcon marginRight={7} size={25} color={"white"} />
                {profile.Gender}
              </li>
            </Text>
            <Text display="flex" alignItems="center">
              {" "}
              <li>
                <EnvelopeIcon marginRight={0} size={25} color={"white"} />{" "}
                <Link textDecoration="none" href={`mailto:${profile.Email}`}>
                  <li
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {profile.Email}
                  </li>
                </Link>
              </li>
            </Text>
            <Text display="flex" alignItems="center">
              <PhoneIcon marginRight={5} size={25} color={"white"} />{" "}
              <Link textDecoration="none" href={`tel:+${profile.PhoneNumber}`}>
                {" "}
                <li
                  style={{
                    display: "inline-block",
                  }}
                >
                  {profile.PhoneNumber}
                </li>
              </Link>
            </Text>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="column"></Pane>

        <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              id={tab}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              <h3> {tab}</h3>
            </Tab>
          ))}
        </TabNavigation>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 0 ? "flex" : "none"}
            flexDirection="column"
            background="rgb(39, 23, 65)"
          >
            <Text>
              <CreditCardIcon marginRight={5} size={25} color={"white"} />
              <li> {profile.CreditCardNumber}</li>
            </Text>
            <Text>
              {" "}
              <CreditCardIcon marginRight={5} size={25} color={"white"} />
              <li> {profile.CreditCardType}</li>
            </Text>
            <Text>
              {" "}
              <DollarIcon marginRight={5} size={25} color={"white"} />
              <li> {profile.PaymentMethod}</li>
            </Text>
          </Pane>
        </Pane>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 1 ? "flex" : "none"}
            flexDirection="column"
            background="rgb(39, 23, 65)"
          >
            <Pane display="flex" flexDirection="column">
              <Text>
                <MapMarkerIcon marginRight={5} size={25} color={"white"} />

                <li> {profile.Longitude}</li>
              </Text>
              <Text>
                <MapMarkerIcon marginRight={5} size={25} color={"white"} />{" "}
                <li> {profile.Latitude}</li>
              </Text>
            </Pane>
          </Pane>
        </Pane>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 2 ? "flex" : "none"}
            flexDirection="column"
            background="rgb(39, 23, 65)"
          >
            <Pane display="flex" flexDirection="column">
              <Text>
                {" "}
                <SocialMediaIcon marginRight={5} size={25} color={"white"} />
                <li> {profile.LastLogin}</li>
              </Text>
              <Text>
                {" "}
                <GlobeNetworkIcon marginRight={5} size={25} color={"white"} />
                <li> {profile.URL}</li>
              </Text>
              <Text>
                {" "}
                <GlobeIcon marginRight={5} size={25} color={"white"} />
                <li> {profile.DomainName}</li>
              </Text>
              <Text>
                <DesktopIcon marginRight={5} size={25} color={"white"} />{" "}
                <li> {profile.MacAddress}</li>
              </Text>
            </Pane>
          </Pane>
        </Pane>
      </Card>
    </>
  );
};

export default Profile;
