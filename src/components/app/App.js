import React, { Component } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import ListItem from "../ListItem";
import "./app.scss";

class App extends Component {
  state = {
    photos: [],
    totalPhotos: 0,
    perPage: 30,
    currentPage: 1,
    query: null
  };

  componentDidMount() {
    this.fetchPhotos("gorilla", this.state.currentPage);
  }

  fetchPhotos = (inputValue, page) => {
    const baseUrl = "https://api.unsplash.com/search/photos";

    const options = {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
      },
      params: {
        query: inputValue,
        page: this.state.page,
        per_page: this.state.perPage
      }
    };

    axios
      .get(baseUrl, options)
      .then(response => {
        this.setState({
          photos: response.data.results,
          totalPhotos: parseInt(response.headers["x-total"]),
          currentPage: page,
          query: inputValue
        });

        console.log("query from state", this.state.query);
        console.log("perPage from state", this.state.perPage);
        console.log("currentPage from state", this.state.currentPage);
        console.log("Page inside App", this.props.page);
        console.log("Page inside App", this.state.currentPage);
        console.log("---------------------");
      })
      .catch(() => {
        console.log("Error");
      });
  };

  render() {
    return (
      <div className="app">
        <SearchBar onSubmit={this.fetchPhotos} />
        <Pagination
          current={this.state.currentPage}
          total={this.state.totalPhotos}
          perPage={this.state.perPage}
          query={this.state.query}
          onPageChanged={query => this.fetchPhotos(this.state.query)}
          page={this.props.page}
        />
        <List data={this.state.photos} />
      </div>
    );
  }
}

const List = ({ data }) => {
  var items = data.map(photo => <ListItem key={photo.id} photo={photo} />);
  return <div className="grid">{items}</div>;
};

export default App;
