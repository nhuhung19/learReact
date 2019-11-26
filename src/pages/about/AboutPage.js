import '../../vendors/linericon/style.css'
import React from 'react'
import {Link} from "react-router-dom"

import Appbar from '../../components/appbar/Appbar'
import About from '../../components/about/About'
import Testimonial from '../../components/testimonial/Testimonial'

export default function AboutPage(){
    return(
        <>
        <Appbar>
            <div className="col-12">
                <h1>About Us</h1>
                <Link to="/">Home</Link>
                <span className="lnr lnr-arrow-right"></span>
                About Us
            </div>
        </Appbar>
        <About />
        <Testimonial />
        </>
    )
}