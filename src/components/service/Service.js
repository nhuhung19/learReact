import React from 'react'
import './service.css'
import '../../vendors/flaticon/flaticon.css'

import Option from './Option'
const OPTION = [
    {
        title: 'ARCHITECTURE',
        content: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.'
    },
    {
        title: 'INTERIOR DESIGN',
        content: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.'
    },
    {
        title: 'CONCEPT DESIGN',
        content: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.'
    }
]
export default function Service(){

    return (
        <section className="service container">
        <div className="service__header ">
            <h1 style={{textalign: "center"}}>OFFERINGS TO MY CLIENTS</h1>
            <p style={{textalign: "center"}}>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
            </p>
        </div>
        <section className="service__feature row justify-content-between">
            {OPTION.map((op, i) => (
                <Option title={op.title} content={op.content} key={i}/>
            ))}
            
            {/* <div className="service__feature__block col-12 col-lg-4">
                <i className="flaticon-city"></i>
                <h3>ARCHITECTURE</h3>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
            </div>
            <div className="service__feature__block col-12 col-lg-4">
                <i className="flaticon-skyline"></i>
                <h3>INTERIOR DESIGN</h3>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
            </div>
            <div className="service__feature__block col-12 col-lg-4 ">
                <i className="flaticon-sketch"></i>
                <h3>CONCEPT DESIGN</h3>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
            </div> */}
        </section>
    </section>
    )
}