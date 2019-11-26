import '../../vendors/linericon/style.css'
import React from 'react'
import {Link} from 'react-router-dom'

import Appbar from '../../components/appbar/Appbar'
import Service from '../../components/service/Service'
import Testimonial from '../../components/testimonial/Testimonial'


export default function ServicesPage(){
	return(
	<>
		<Appbar>
            <div className="col-12">
                <h1>Services</h1>
                <Link to="/">Home</Link>
                <span className="lnr lnr-arrow-right"></span>
                Services
            </div>
        </Appbar>
		<Service />
		<Testimonial />
	</>
	)
}
