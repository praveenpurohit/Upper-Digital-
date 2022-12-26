import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/style.css';
import { FaBars } from "react-icons/fa";

const Navigation = () => {

	const links = [
		{
			name: 'Home',
			to: '/',
			className: 'nav-link active'
		},
		{
			name: 'About',
			to: '/about',
			className: 'nav-link'
		},
		{
			name: 'Services',
			to: '/services',
			className: 'nav-link'
		},
		{
			name: 'Portfolio',
			to: '/portfolio',
			className: 'nav-link'
		},
		{
			name: 'Contact',
			to: '/contact',
			className: 'nav-link'
		}
	]

	return (
		<>
			<nav className="navbar navbar-expand-lg py-4 navigation header-padding " id="navbar">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						{/* <img src="images/logo.png" alt="" className="img-fluid" /> */}
						<h3>Upper Digital</h3>
					</Link>

					<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
						<span ><FaBars /></span>
					</button>

					<div className="collapse navbar-collapse text-center" id="navbarsExample09">
						<ul className="navbar-nav m-auto">
							{links.map((item, index) => (<Link key={index} className={item.className} to={item.to}>{item.name}</Link>))}
						</ul>

						<Link className="btn btn-solid-border d-none d-lg-block" to="/contact">Get an estimate <i className="fa fa-angle-right ml-2"></i></Link>
					</div>
				</div>
			</nav>

			{/* For Blog Option */}
			{/* <li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
<ul className="dropdown-menu" aria-labelledby="dropdown05">
	<li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
	<li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
</ul>
</li> */}


		</>

	)
}

export default Navigation;
