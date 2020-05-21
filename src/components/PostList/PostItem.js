import React from "react";

export default function PostItem(props) {
  const { post } = props;
  return (
    <div>
      <li class="list-group-item">{post.title}</li>
    </div>
  );
}
