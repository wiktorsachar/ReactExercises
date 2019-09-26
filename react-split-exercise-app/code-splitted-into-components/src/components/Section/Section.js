import React from "react";
import Head from "../shared/Head";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const Section = props => (
  <section className="jumbotron text-center">
    <div className="container">
      <Head title={props.title} />
      <Paragraph className="lead text-muted" text={props.text} />
      <Paragraph text={<Button text={props.buttonText} />} />
    </div>
  </section>
);

export default Section;
