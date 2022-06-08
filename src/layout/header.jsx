function Header() {
	return (
		<header>
			<nav className="blue lighten-1">
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">React Movies</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="https://github.com/Waydj/react-app2">Repo</a></li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header;