import '../../vendors/linericon/style.css'
import './about.css'

import React from 'react';

import Skill from './Skill'


const SKILLS = [
    {
        name: 'After Effects',
        proficiency: 85,
    },
    {
        name: 'Photoshop',
        proficiency: 90,
    },
    {
        name: 'Illustrator',
        proficiency: 70,
    },
    {
        name: 'Sublime',
        proficiency: 95,
    },
    {
        name: 'Sketch',
        proficiency: 75,
    },
]

export default function About() {
    return (
        <section className="about container">
        <div className="row">
        <article className="article  col-12 col-lg-6 ">
            <h1>ABOUT MYSELF</h1>
            <p className="article__content" style={{color: '#777777'}}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior
                is often laughed.
            </p>
            <div className="row  justify-content-between">
                <div className="achievement-box col-12 col-lg-4">
                    <i className="lnr lnr-database"></i>
                    <p className="achievement-box__figure">$2.5M</p>
                    <p className="achievement-box__desc">Total Donation</p>
                </div>
                <div className="achievement-box col-12 col-lg-4">
                    <i className="lnr lnr-book"></i>
                    <p className="achievement-box__figure">1465</p>
                    <p className="achievement-box__desc">Total Projects</p>
                </div>
                <div className="achievement-box col-12 col-lg-4">
                    <i className="lnr lnr-users"></i>
                    <p className="achievement-box__figure">3965</p>
                    <p className="achievement-box__desc">Total Volunteers</p>
                </div>
            </div>
        </article>
        <main className="skillset col-12 col-lg-6">
            {/* C.2 */}
            {SKILLS.map((sk, i) => (
                <Skill name={sk.name} value={sk.proficiency} key={i} />
            ))}

            {/* C.1 */}
            {/* <Skill name="After Effects" value="85" />  */}
            {/* <Skill name="After Effects" value={85} /> {/* sử dụng isRequire để nhắc nhở ng dùng bắt buộc phải nhập đủ dữ liệu /*} */}
            {/* <Skill name="Photoshop" value={90} />
            <Skill name="Illustrator" value={70} />
            <Skill name="Sublime" value={95} />
            <Skill name="Sketch" value={75} /> */}
             
            {/* <p>After Effects <span className="skillset__number">85</span>%</p>
            <div className="skillset__progress-bar">
                <div className="progress-bar__track" >
                    <div className="progress-bar__value"  data-width="85%"></div>
                </div>
            </div> */}
            {/* <p>Photoshop <span className="skillset__number">90</span>%</p>
            <div className="skillset__progress-bar" >
                <div className="progress-bar__track" >
                    <div className="progress-bar__value" data-width="90%"></div>
                </div>
            </div> */}
            {/* <p>Illustrator <span className="skillset__number">70</span>%</p>
            <div className="skillset__progress-bar" >
                <div className="progress-bar__track" >
                    <div className="progress-bar__value" data-width="70%"></div>
                </div>
            </div> */}
            {/* <p>Sublime <span className="skillset__number">95</span>%</p>
            <div className="skillset__progress-bar" >
                <div className="progress-bar__track" >
                    <div className="progress-bar__value" data-width="95%"></div>
                </div>
            </div> */}
            {/* <p>Sketch <span className="skillset__number">75</span>%</p>
            <div className="skillset__progress-bar" >
                <div className="progress-bar__track" >
                    <div className="progress-bar__value" data-width="85%"></div>
                </div>
            </div> */}
        </main>
    </div>
    </section>
    );
}