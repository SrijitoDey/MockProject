import React, { Component } from 'react'
import Card from './project-cards'
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.webp"

function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img5} title="Smart Voting System" description="Smart voting system” is a decentralized system that uses Iris recognition, an automated method of biometric identification of Iris images to ensure a secure voting process and eradicate dummy votes." icons={<ul><li>OpenCV</li><li>Blockchain</li><li>ReactJS</li></ul>} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="Money Heaven" description="Money Heaven is a one-stop destination for financial services to help investors to track their investments in Equities,Cryptocurrencies and Insurance." gitlink="https://github.com/abhiwaghmare/Money-Heaven---The-Complete-Financial-Analyzer" icons={<ul><li>Deep Learning</li><li>Django Framework</li></ul>} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img4} title="ShrinkTheLink URL Shortner" description="ShrinkTheLink is the perfect free URL shortner for transforming long,ugly links into nice memorable and short URLs." gitlink="https://github.com/abhiwaghmare/ShrinkTheLink" icons={<ul><li>Python</li><li>Django Framework</li><li>Heroku Platform</li></ul>} />
                </div>
            </div>
        </div>
    )
}
export default Cards;