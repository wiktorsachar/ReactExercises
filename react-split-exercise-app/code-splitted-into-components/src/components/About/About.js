import React from "react";
import Head from "../shared/Head";
import Paragraph from "../shared/Paragraph";

const About = props => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <Head title={props.title} />
          <Paragraph className="text-muted" text={props.text} />
        </div>
      </div>
    </div>
  </section>
);

export default About;
