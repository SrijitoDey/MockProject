import React, { Component } from 'react'
import Card from './project-cards'

function Cards({ selectedProfile }) {
    return (
        <div className="Container">
                <div id="heading">
                    <h3 id="head-text">My Projects</h3>
                </div>
        <div className="container-fluid d-flex justify-content-center" id='projects'>
            <div className="row">
                {console.log(selectedProfile.project)}
                {selectedProfile.project.map((item) => (
                    <div className="col-md-4">
                        <Card imgsrc={item.projectImg} title={item.title} description={item.desc} techstack={item.techstack} />
                    </div>
                ))}
                
            </div>
        </div>
        </div>
    )
}
export default Cards;