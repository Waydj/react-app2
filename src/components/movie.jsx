function Movie(props) {

	const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

	return (
		<div className="card" id={id}>
			<div className="card-image">
				{
					poster !== "N/A" ? (
						<img src={poster} alt="poster" />
					) : (
						<img src="https://via.placeholder.com/468x200?text=Visit+Blogging.com+Now" alt="poster" />
					)
				}
			</div>
			<div className="card-content">
				<span className="card-title grey-text text-darken-4">{title}</span>
				<p>{year}</p>
				<p>{type}</p>
			</div>
		</div>
	)

}

export default Movie;