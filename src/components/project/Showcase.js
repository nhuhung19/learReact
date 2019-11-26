import React from 'react'
import * as PropTypes from 'prop-types'
import icon from '../../images/icon.png'

export default function Showcase(props){
    return(
        <div className="project__showcase__block col-12 col-lg-4">
            <div className="project__showcase__block__img">
                <div className="project__showcase__overlay">
                    <a className="light" href={props.image}>
                        <img src={icon} alt=""/>
                    </a>
                </div>
                <img src={props.image} alt="" />
            </div>
            <h5>{props.name}</h5>
            <p>{props.type}</p>
        </div>
    )
}

Showcase.propTypes={
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}