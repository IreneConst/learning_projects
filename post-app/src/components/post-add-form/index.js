import React from "react";
import "./post-add-form.css";

class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          className="form-control new-post-label"
          type="text"
          placeholder="Say something"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button className="btn btn-outline-light" type="submit">
          Add post
        </button>
      </form>
    );
  }
}

export default PostAddForm;
