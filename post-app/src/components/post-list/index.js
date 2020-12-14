import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        {/* using spread operator to simplify */}
        {/* <PostListItem label={item.label} important={item.important} /> */}
        <PostListItem
          onDelete={() => onDelete(id)}
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
