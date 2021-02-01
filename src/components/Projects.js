import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

function Projects() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ProjectItems src='images/Space-Race.png' text='Space themed game that captures the users input to move a rocket around asteroids' label='Space Race' path='https://jaxonnarramore.github.io/' />
                        <ProjectItems src='images/Air-Qual.png' text='Get air quality information for anywhere in the world' label='Air Qual' path='https://air-qual.herokuapp.com/' />
                    </ul>
                    <ul className="cards__items">
                        <ProjectItems src='images/PDR.png' text='Track bugs on your website as a user, developer or a company admin.' label='PDR' path='https://pestdamagereport.herokuapp.com/' />
                        <ProjectItems src='images/PDR.png' text='This is the text for this ' label='Task Manager' path='https://pestdamagereport.herokuapp.com/' />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Projects
