import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

const Post = ({ title, image, text, rating }) => {
  return (
    <div>
      <Title title={title} />
      <Image url={image} />
      <Text text={text} />
      <Rating rating={rating} />
    </div>
  );
};

export default Post;
