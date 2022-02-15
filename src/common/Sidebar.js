import React from 'react';
import {NavLink, Link } from "react-router-dom";
function Sidebar() {
	return (
		<>
			<div id="layoutSidenav_nav">
				<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
					<div className="sb-sidenav-menu">
						<div className="nav">
							{/* <div className="sb-sidenav-menu-heading">Core</div> */}
							{/* <NavLink className="nav-link" to ="/user">
								<div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
								User
							</NavLink> */}
							<NavLink className="nav-link" to ="/repo">
								<div className="sb-nav-link-icon"><i className="fas fa-regular fa-code-branch"></i></div>
								Repository
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Sidebar;