import { Pane, Select, Text } from "evergreen-ui";
import React from "react";
import "./SelectBar.css";

const SelectBar = ({ filterBy, setFilterBy }) => {
  return (
    <Pane>
      <Text marginRight={5}>
        <li className="filterBy">Filter By</li>
      </Text>
      <Select
        value={filterBy}
        onChange={(event) => setFilterBy(event.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="None" defaultValue>
          None
        </option>
        <optgroup label="Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer to skip">Prefer to skip</option>
        </optgroup>
        <optgroup label="PaymentMethod">
          <option value="check">Check</option>
          <option value="cc">CC</option>
          <option value="money order">Money Order</option>
        </optgroup>
      </Select>
    </Pane>
  );
};

export default SelectBar;
