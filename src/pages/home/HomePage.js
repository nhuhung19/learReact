import './home-page.css';
import React from 'react';
import Appbar from '../../components/appbar/Appbar'
import Profile from '../../components/profile/Profile'
import About from '../../components/about/About'
import Experiences from '../../components/experiences/Experiences'
import Service from '../../components/service/Service'
import Project from '../../components/project/Project'
import Testimonial from '../../components/testimonial/Testimonial'


export default class HomePage extends React.Component {
    render(){
        return (
      <>
        <Appbar>
            <Profile />
        </Appbar>
        <About />
        <Experiences />
        <Service />
        <Project />
        <Testimonial />
      </>
        )
    }
}