import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutPage from './pages/about/AboutPage'
import HomePage from './pages/home/HomePage'
import ServicesPage from "./pages/services/ServicesPage";
import PortfolioPage from './pages/portfolio/PortfolioPage'

export default function Routes(){
	return(
		<Switch>
			{/* A <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
			<Route path="/about">
				<AboutPage />
			</Route>
			<Route path="/services">
				<ServicesPage />
			</Route>
			<Route path="/portfolio">
				<PortfolioPage />
			</Route>
			{/*path đơn giản để dưới cùng, path dài để ở trên cùng để tránh trường hợp tìm path ngắn trước mà không hiện thị path dài */}
			<Route path="/">
				<HomePage />
			</Route>
		</Switch>
	)
}