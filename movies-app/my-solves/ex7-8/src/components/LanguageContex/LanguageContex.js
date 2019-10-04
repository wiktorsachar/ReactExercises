import React from "react";

const LanguageContex = ({ handler }) => (
  <div>
    <button onClick={() => handler("pl")}>PL</button>
    <button onClick={() => handler("en")}>ENG</button>
  </div>
);

export default LanguageContex;
