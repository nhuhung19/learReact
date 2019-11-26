import './profile.css'
import img from '../../images/personal.jpg'
import React from 'react'

export default function Profile(){
    return(
        <>
            <div className="appbar__profile__avatar col-12 col-lg-6">
                <img src={img} alt="Personal" />
            </div>
            <div className="appbar__profile__content col-12 col-lg-6">
                <p>HELLO EVERYBODY, I AM</p>
                <h5>DONALD MCKINNEY</h5>
                <h5>JUNIOR UI/UX DEVELOPER</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="Email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="Pass" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No.</label>
                        <input id="phone" name="Phone" type="text" className="form-control" placeholder="Your cellphone" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label className="form-check-label" htmlFor="check">Check me out</label>
                    </div>
                        <input type="button" id="submit" value="Submit" className="btn btn-primary" />
                        <input type="button" id="reset" value="Reset" className="btn btn-warning" />
                </form>
                
            </div>
        </>
    )
}