/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import * as PropTypes from 'prop-types'


export default function Button(props){
    return (
    <a className="project__menu__item" href="#" onClick={props.onClick}>{props.btn}</a>
    )
}

Button.propTypes = {
    btn: PropTypes.string.isRequired
}