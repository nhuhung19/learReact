import React from 'react'
import * as PropTypes from 'prop-types' 


export default function Option(props){
    return (
        <div className="service__feature__block col-12 col-lg-4">
            <i className="flaticon-city"></i>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Option.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}