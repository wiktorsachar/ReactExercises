import React from "react";
import Repeat from "react-repeat-component";

import { ReactComponent as Star } from "../../star-fill.svg";

const Rating = props => (
  <div>
    Ocena:
    <Repeat times={10}>
      {i => (
        <span key={i} onClick={() => props.onChange(i + 1)}>
          <Star
            width="20"
            height="20"
            viewBox="0 0 240 240"
            className={i >= props.rating ? "disabled" : ""}
          />
        </span>
      )}
    </Repeat>
  </div>
);

export default Rating;
