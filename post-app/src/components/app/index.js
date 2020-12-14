import React from "react";
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";

import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "React", important: false, like: false, id: 1 },
        { label: "is", important: true, like: false, id: 2 },
        { label: "cool", important: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else return items;
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          onDelete={this.deleteItem}
          posts={visiblePosts}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}

export default App;
