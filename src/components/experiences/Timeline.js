import React from 'react'
import * as PropTypes from 'prop-types'


export default function Timeline(props){
    const { data: periods, visible } = props

    return(
        <div className={`${ visible ? '' : 'd-none'} timeline container`}>
            <div className="timeline__column"></div>
            {
                periods.map((pr, i) => (
                    <Period data={pr} key={i} />
                ))
            }

            {/* <div className="timeline__period row">
                <div className="timeline__dot">
                    <div className="timeline__dot__small"></div>
                </div>
                <div className="timeline__period__time col-12 col-lg-5">March 2017 to present</div>
                <div className="timeline__period__job col-12 col-lg-5">
                    <h2>COLORLIB</h2>
                    <p>Senior Web Developer</p>
                    <p>Santa monica, Los angeles</p>
                </div>
            </div> */}
        </div>
    )
}

Timeline.propTypes = {
    visible: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        job: PropTypes.shape({
            company: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
        })
    }))
}

/**
Input: 
    data = {
        time: 'August 2018 to present',
        job: {
            company: 'EXPERIENCES',
            position: 'Senior Web Developer',
            address: 'Santa monica, Los angeles',
        }
    }
*/
function Period(props) {
    const {
        data: {
            time,
            job: {
                company, position, address
            },
        },
    } = props
    // C2: const {data} = props  // destructering
    return (
        <div className="timeline__period row">
            <div className="timeline__dot">
                <div className="timeline__dot__small"></div>
            </div>

            <div className="timeline__period__time col-12 col-lg-5">
            {time} {/*{data.time}*/}
            </div>
            <div className="timeline__period__job col-12 col-lg-5">
                <h2>{company}</h2> {/*<h2>{data.job.company}</h2> */}
                <p>{position}</p> {/*<p>{data.job.position}</p> */}
                <p>{address}</p> {/*<p>{data.job.address}</p> */}
            </div>
        </div>
    )
}

Period.propTypes = {
    data: PropTypes.shape({
        time: PropTypes.string.isRequired,
        job: PropTypes.shape({
            company: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
        })
    })
}