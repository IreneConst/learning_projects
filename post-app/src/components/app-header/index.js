import React from "react";
import "./app-header.css";
// import styled from "styled-components";

// const Header = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
//   h1 {
//     font-size: 26px;
//     // color: ${(props) => (props.colored ? "red" : "green")}
//     :hover {
//       color: blue;
//     }
//   }
//   h2 {
//     font-size: 1.2rem;
//     color: grey;
//   }
// `;<Header>

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Irene</h1>
      <h2>
        {allPosts} posts, {liked} liked
      </h2>
    </div>
  );
};

export default AppHeader;
