import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="header">
        <h1>Search for images on Unsplash</h1>
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <input
            type="text"
            placeholder="Type here to search for images"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
