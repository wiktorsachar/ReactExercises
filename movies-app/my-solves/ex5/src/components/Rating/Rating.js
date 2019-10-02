import React from "react";
import Repeat from "react-repeat-component";

const Rating = ({ rating }) => (
  <h3>
    <span>
      Rating: {rating}
      <Repeat times={rating}>
        {i => (
          <span key={i} role="img" aria-label="white medium star">
            &#11088;
          </span>
        )}
      </Repeat>
    </span>
  </h3>
);

export default Rating;
