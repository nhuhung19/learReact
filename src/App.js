import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// import Appbar from './components/appbar/Appbar'
// import About from './components/about/About'
// import HomePage from './pages/home/HomePage'
// import Experiences from './components/experiences/Experiences'
// import Service from './components/service/Service'
// import Testimonial from './components/testimonial/Testimonial'
// import Project from './components/project/Project'
// import Profile from './components/profile/Profile'
import Routes from './Routes'
import Footer from './components/footer/Footer'


function App() {
    return (
    <Router>
        <Routes />
        <Footer />
        {/* <AboutPage /> */}
        {/* <Appbar> */}
            {/* phần nằm giữa thẻ đóng và thẻ mở là props.children */}
            {/* <Profile /> */}
        {/* </Appbar> */}
        {/* <About /> */}
        {/* <Experiences /> */}
        {/* <Service /> */}
        {/* <Testimonial /> */}
        {/* <Project /> */}
        {/* <Footer /> */}
    </Router>
    );
}

export default App;
