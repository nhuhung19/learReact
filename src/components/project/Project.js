import './project.css'

import React, { useState }  from 'react'
import Button from './Button'
import Showcase from './Showcase'

import Img_1 from '../../images/project-1.jpg'
import Img_2 from '../../images/project-2.jpg'
import Img_3 from '../../images/project-3.jpg'
import Img_4 from '../../images/project-4.jpg'
import Img_5 from '../../images/project-5.jpg'
import Img_6 from '../../images/project-6.jpg'

const SHOWCASE = [
    {
        name: 'Client Project',
        style: '3D Helmet Design',
        img: `${Img_1}`,
    },
    {
        name: 'Client Project',
        style: '2D Vinyl Design',
        img: `${Img_2}`,
    },
    {
        name: 'Client Project',
        style: 'Creative Poster Design',
        img: `${Img_3}`,
    },
    {
        name: 'Client Project',
        style: 'Embosed Logo Design',
        img: `${Img_4}`,
    },
    {
        name: 'Client Project',
        style: '3D Disposable Bottle',
        img: `${Img_5}`,
    },
    {
        name: 'Client Project',
        style: '3D Logo Design',
        img: `${Img_6}`,
    }
]

const CATEGORIES = [
	{
		"name": "Vector",
		"projects": [0, 1, 2]
	},
	{
		"name": "Raster",
		"projects": [0, 1, 2, 4]
	},
	{
		"name": "UI/UX",
		"projects": [1, 2, 4, 5]
	},
	{
		"name": "Printing",
		"projects": [0, 1, 3]
	}
]

// Stateful: activeCategory
// Initial state: null
export default function Project(){
	const [activeCategory, setActiveCategory] = useState(null)

	function isVisible(i) {
		if(activeCategory === null){
			return true
		}
		else {
			return activeCategory.projects.includes(i)
		}
		
	}

	// Func returns func => Curry function
	// JS Closure (Scope)
	function onClickFactory(btnInx) {
		return function onClick(event) {
			event.preventDefault()
			if(btnInx === -1){
				setActiveCategory(null)
			}
			else{
				setActiveCategory(CATEGORIES[btnInx])
			// btnInx
			}
		}
	}
    return(
        <section className="project">
            <div className="project__header">
                <h1>OUR LATEST FEATURED PROJECTS</h1>
                <p>Who are in extremely love with eco friendly system.
                </p>
            </div>
            <nav className="project__menu">
				<Button btn="all" key={-1}  onClick={onClickFactory(-1)} />
                {CATEGORIES.map((btn, i) => (
                    <Button btn={btn.name} key={i} onClick={onClickFactory(i)} />
                ))}
            </nav>
            
        <section className="project__showcase container">
            <div className="row">
            {
                SHOWCASE.map((show, i) => (
					isVisible(i)
                	? <Showcase name={show.name} type={show.style} image={show.img} key={i} />
					: null
                ))
            }
            </div>
        </section>
        <div className="experiences__loadmore">
            <button>Load More Item</button>
        </div>
    </section>
    )
}