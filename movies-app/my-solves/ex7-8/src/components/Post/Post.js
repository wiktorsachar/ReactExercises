import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

const Post = ({ title, image, text, rating, handler, language }) => {
  const languagePicker = (data) => {
    switch (language) {
      case "pl":
        return data.pl;
      case "en":
        return data.en;
      default:
        break;
    }
  };
  return (
    <div>
      <Title title={languagePicker(title)} />
      <Image url={image} />
      <Text text={languagePicker(text)} />
      <Rating rating={rating} handler={handler} />
    </div>
  );
};

export default Post;
