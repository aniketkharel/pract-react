import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav class="border fixed split-nav">
				<div class="nav-brand">
					<h3>
						<Link to="/">sancho's</Link>
					</h3>
				</div>
				<div class="collapsible">
					<input id="collapsible1" type="checkbox" name="collapsible1" />
					<button>
						<label for="collapsible1">
							<div class="bar1"></div>
							<div class="bar2"></div>
							<div class="bar3"></div>
						</label>
					</button>
					<div class="collapsible-body">
						<ul class="inline">
							<li>
								<Link to="/projects">Projects ?</Link>
							</li>
							<li>
								<Link to="/blogs">Blogger ?</Link>
							</li>
							{/* <li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/aniketkharel">
									Github
								</a>
							</li> */}
							<li>
								<Link to="/about">C / About ?</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
