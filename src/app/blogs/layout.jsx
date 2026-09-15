import React from "react";

const PostLayout = ({ children }) => {
  return (
    <div>
      <h1>This is a fixed Portion of Blog Layout...</h1>
      <div>{children}</div>
    </div>
  );
};

export default PostLayout;
