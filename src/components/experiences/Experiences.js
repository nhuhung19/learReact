import './experiences.css'

import React, { useState } from 'react'

import Timeline from './Timeline'


const EXP_DATA = [
    {
        time: 'August 2018 to present',
        job: {
            company: 'EXPERIENCES',
            position: 'Senior Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
    {
        time: 'July 2017 to 2018',
        job: {
            company: 'EXPERIENCES',
            position: 'Junior Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
    {
        time: 'May 2015 to 2017',
        job: {
            company: 'EXPERIENCES',
            position: 'Refresher Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
]

const EDU_DATA = [
    {
        time: 'August 2018 to present',
        job: {
            company: 'EDUCATION',
            position: 'Senior Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
    {
        time: 'July 2017 to 2018',
        job: {
            company: 'EDUCATION',
            position: 'Junior Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
    {
        time: 'May 2015 to 2017',
        job: {
            company: 'EDUCATION',
            position: 'Refresher Web Developer',
            address: 'Santa monica, Los angeles',
        }
    },
    
]

const BTN_TREE_MAP = {
	'btnExp': 'timelineExp',
	'btnEdu': 'timelineEdu',
}

const INITIAL_STATE = {
	treeVisibility: {
		'timelineExp': true,
		'timelineEdu': false,
	},
	activeBtnId: 'btnExp',
	prop1: '1',
	prop2: '2',
}

// Stateless: Khong thay doi trang thai, chi hien thi thong tin
// Stateful: Co thay doi trang thai, xu ly tuong tac
export default function Experiences() {
	// hàm setState dùng để gắn giá trị cho state
	// không đc gắn giá trị cho state
	const [state, setState] = useState(INITIAL_STATE)

	let { treeVisibility, activeBtnId } = state
	
	function onClick(evt) {
		// debugger
		const id = evt.currentTarget.id
		const hidenTree = BTN_TREE_MAP[activeBtnId] // lay noi dung cua bien activeBtnId
		               // BTN_TREE_MAP.activeBtnId
		const shownTree = BTN_TREE_MAP[id]

		setState({
			...state,
			treeVisibility: {
				...treeVisibility,
				[hidenTree]: false, // Computed property
				[shownTree]: true,
			},
			activeBtnId: id,
		})
		
		//// KHONG the render
		// state.treeVisibility[hidenTree] = false
		// state.treeVisibility[shownTree] = true
		// state.activeBtnId = id
		// setState(state)

		//// KHONG the render
		// treeVisibility[hidenTree] = false
		// treeVisibility[shownTree] = true
		// activeBtnId = id
	}

	function getActiveClass(btnId) {
		return (btnId === activeBtnId) ? 'experiences__button--active' : ''
	}

	function isTreeVisible(treeId) {
		return treeVisibility[treeId]
	}


    return (
        <>
        <style type="text/css">
            {`
                .grad-bg {
                    background-image: linear-gradient(to right, #766dff 0%, #88f3ff 100%);
                }
            `}
        </style>
        <section className="experiences contanier grad-bg">
			<button id="btnExp"
				className={`experiences__button ${getActiveClass('btnExp')}`}
                onClick={ onClick }>
					My Experiences
			</button>
			<button id="btnEdu"
				className={`experiences__button ${getActiveClass('btnEdu')}`}
                onClick={onClick}>
					My Education
			</button>

            <Timeline data={EXP_DATA} visible={isTreeVisible('timelineExp')} /> {/*true*/}

            <Timeline data={EDU_DATA} visible={isTreeVisible('timelineEdu')} /> {/*false*/}
        </section>
    </>
    )
}
