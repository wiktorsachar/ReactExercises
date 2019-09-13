import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

const FilterModule = props =>
  !props.display || props.display.map(e => <PersonCard data={e} />);

export default FilterModule;
