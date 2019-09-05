import React from "react";

const MessageSwitch = props => {
  const message = {
    positive: "Możesz obejrzeć film. Zapraszamy!",
    negative: "Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"
  };
  return (
    <>
      <p>{props.handler ? message.positive : message.negative}</p>
    </>
  );
};

export default MessageSwitch;