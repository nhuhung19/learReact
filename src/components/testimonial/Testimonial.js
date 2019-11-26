import React from 'react'
import Ability from './Ability'
import './testimonial.css'
import '../../vendors/fontawesome-free-5.11.2-web/css/all.css'


const Abilities = [
    {
        title: "Fanny Spencer",
        text: "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face"
    },
    {
        title: "Fanny Spencer",
        text: "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face"
    },
    {
        title: "Fanny Spencer",
        text: "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face"
    }
]





export default function Testimonial(){
    return (
    <>
    <style type="text/css">
        {`
            .grad-bg {
                background-image: linear-gradient(to right, #766dff 0%, #88f3ff 100%);
            }
        `}
    </style>
    
    <section className="testi grad-bg">
        <div className="testi__header">
            <h1>TESTIMONIALS</h1>
            <p className="testi__intro">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
            </p>
        </div>
        <section className="testi-list container">
            <div id="testi-container" className="row justify-content-between">
                    {Abilities.map((ab, i) => (
                        <Ability author={ab.title} content={ab.text} key ={i}/>
                    ))}
                {/* </div>   */}
                    {/* <p className="testi__content">As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                    <h3 className="testi__author">Fanny Spencer</h3>
                    <a data-index="0" className="btn-star" href="#Link">
                        <i id="rating1-1" className="far fa-star"></i></a>
                    <a data-index="1" className="btn-star" href="#Link">
                        <i id="rating1-2" className="far fa-star"></i></a>
                    <a data-index="2" className="btn-star" href="#Link">
                        <i id="rating1-3" className="far fa-star"></i></a>
                    <a data-index="3" className="btn-star" href="#Link">
                        <i id="rating1-4" className="far fa-star"></i></a>
                    <a data-index="4" className="btn-star" href="#Link">
                        <i id="rating1-5" className="far fa-star"></i></a>
                </div>
                <div id="testi-2" className="testi-list__item col-12 col-lg-4">
                    <p className="testi__content">As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                    <h3 className="testi__author">Fanny Spencer</h3>
                    <a data-index="0" className="btn-star" href="#Link">
                        <i id="rating1-1" className="far fa-star"></i></a>
                    <a data-index="1" className="btn-star" href="#Link">
                        <i id="rating1-2" className="far fa-star"></i></a>
                    <a data-index="2" className="btn-star" href="#Link">
                        <i id="rating1-3" className="far fa-star"></i></a>
                    <a data-index="3" className="btn-star" href="#Link">
                        <i id="rating1-4" className="far fa-star"></i></a>
                    <a data-index="4" className="btn-star" href="#Link">
                        <i id="rating1-5" className="far fa-star"></i></a>
                </div>
                <div id="testi-3" className="testi-list__item col-12 col-lg-4">
                    <p className="testi__content">As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                    <h3 className="testi__author">Fanny Spencer</h3>
                    <a data-index="0" className="btn-star" href="#Link">
                        <i id="rating1-1" className="far fa-star"></i></a>
                    <a data-index="1" className="btn-star" href="#Link">
                        <i id="rating1-2" className="far fa-star"></i></a>
                    <a data-index="2" className="btn-star" href="#Link">
                        <i id="rating1-3" className="far fa-star"></i></a>
                    <a data-index="3" className="btn-star" href="#Link">
                        <i id="rating1-4" className="far fa-star"></i></a>
                    <a data-index="4" className="btn-star" href="#Link">
                        <i id="rating1-5" className="far fa-star"></i></a>
                </div> */}
            
            </div>
        </section> 
        {/* <section id="testiList" className="testi-list owl-carousel">
            
        </section> */}
    </section>
    </>
    )
}
