import React from 'react'
import * as PropType from 'prop-types'

export default function Ability(props){
    return(
        <div id="testi-1" className="testi-list__item col-12 col-lg-4">
            <p className="testi__content">{props.content}</p>
            <h3 className="testi__author">{props.author}</h3>
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
    )
}

Ability.prototype = {
    content: PropType.string.isRequired,
    author: PropType.string.isRequired,
}