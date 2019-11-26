import '../../vendors/linericon/style.css'
import React from 'react'
import {Link} from 'react-router-dom'

import Appbar from '../../components/appbar/Appbar'
import Project from '../../components/project/Project'

export default function PortfolioPage(){
	return(
	<>
		<Appbar>
            <div className="col-12">
                <h1>Portfolio</h1>
                <Link to="/">Home</Link>
                <span className="lnr lnr-arrow-right"></span>
                Portfolio
            </div>
        </Appbar>
		<Project />
	</>
	)
}