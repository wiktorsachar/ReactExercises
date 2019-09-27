import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";

const App = () => (
  <div>
    <Title title="My Blog Page 2018" />
    <Post
      title="Test"
      image="https://picsum.photos/500/200/?random&1"
      text="Ullamco deserunt incididunt non sit irure eiusmod consequat est qui aliquip consequat pariatur nostrud."
    />
    <Post
      title="Test 2"
      image="https://picsum.photos/500/200/?random&2"
      text="Ullamco deserunt incididunt non sit irure eiusmod consequat est qui aliquip consequat pariatur nostrud."
    />
    <Post
      title="Test 3"
      image="https://picsum.photos/500/200/?random&3"
      text="Ullamco deserunt incididunt non sit irure eiusmod consequat est qui aliquip consequat pariatur nostrud."
    />
  </div>
);

export default App;
