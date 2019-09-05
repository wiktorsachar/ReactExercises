import React from "react";

const AgeVerification = props => {
  return (
    <>
      <input type="checkbox" onClick={props.click}></input>
      <p style={{ display: "inline" }}>Mam co najmniej 16 lat</p>
    </>
  );
};

export default AgeVerification;