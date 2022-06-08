import React from "react";

class Search extends React.Component {

	state = {
		search: '',
	}

	handleKey = (e) => {
		if (e.key === "Enter") {
			this.props.searchMovies(this.state.search);
		}
	}

	render() {

		return (
			<div className="row">
				<div className="input-field">
					<input id="search"
						type="search"
						className="validate"
						placeholder="search"
						value={this.state.search}
						onInput={(e) => { this.setState({ search: e.target.value }) }}
						onKeyDown={this.handleKey}
					/>
					<button className="waves-effect waves-light btn-small btn-search" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
				</div>
			</div >
		)

	}
}

export default Search;