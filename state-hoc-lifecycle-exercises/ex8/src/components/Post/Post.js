import React from "react";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";
import { LanguageConsumer } from "../LanguageContext/LanguageContext";

class Post extends React.Component {
  state = {
    rating: null
  };
  onStarCLick = i => this.setState({ rating: i });
  render() {
    const { title, image, text, rating } = this.props;
    return (
      <LanguageConsumer>
        {value => (
          <div>
            <Title title={title[value]} />
            <Image url={image} />
            <Rating
              rating={this.state.rating || rating}
              onChange={this.onStarCLick}
            />
            <Text text={text[value]} />
          </div>
        )}
      </LanguageConsumer>
    );
  }
}

export default Post;
