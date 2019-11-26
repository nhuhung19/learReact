/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../vendors/linericon/style.css'
import '../../vendors/fontawesome-free-5.11.2-web/css/all.min.css'
import './footer.css'

import React from 'react'


export default function Footer(){
    return(
    <footer>
        <div className="footer__content container">
            <div className="row">
                <div className="footer__aboutme col-12 col-lg-5">
                    <h2>About Me</h2>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                    <p>Copyright ©2019 All rights reserved | This template is made with by <a href="javacript:void 0">Colorlib</a></p>
                </div>
                <div className="footer__newletter col-12 col-lg-5">
                    <h2>Newsletter</h2>
                    <p>Stay updated with our latest trends</p>
                    <div id="mc_embed_signup">
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                            <div className="input-group d-flex flex-row">
                                <input
                                    name="email"
                                    onFocus= {onFocus}
                                    onBlur= {onBlur}
                                    required 
                                    type="email" 
                                    placeholder="Enter email address" />
                                <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>		
                            </div>				
                            <div className="mt-10 info"></div>
                        </form>
                    </div>
                </div>
                <div className="footer__follow col-12 col-lg-2">
                    <h2>Follow Me</h2>
                    <p>Let us be social</p>
                    <ul className="list">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

function onFocus(event){
    event.currentTarget.placeholder = ''
}

function onBlur(event){
    event.currentTarget.placeholder = 'Email Address '
}