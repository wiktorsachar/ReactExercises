import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";

const Post = ({ title, image, text }) => {
  return (
    <div>
      <Title title={title} />
      <Image url={image} />
      <Text text={text} />
    </div>
  );
};

export default Post;
