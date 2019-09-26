import React from "react";
import Paragraph from "../shared/Paragraph";

const Footer = props => (
  <footer className="jumbotron">
    <div className="container">
      <Paragraph text={props.text1} />
      <Paragraph
        text={
          <>
            {props.text2} <a href={props.url}> {props.text3}</a>
          </>
        }
      />
    </div>
  </footer>
);

export default Footer;
