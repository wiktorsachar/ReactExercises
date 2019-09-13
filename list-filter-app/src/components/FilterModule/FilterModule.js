import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

const FilterModule = props =>
  !props.display ||
  props.display.map((e, i) => <PersonCard data={e} key={i} />);

export default FilterModule;
