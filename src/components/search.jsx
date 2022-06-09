import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleType = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onInput={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="waves-effect waves-light btn-small btn-search"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className="container dflex">
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleType}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleType}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleType}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
