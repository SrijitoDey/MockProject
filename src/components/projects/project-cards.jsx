import React from "react";
import "./card-style.css";

const Card = (props) => {
  return (
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="overflow text-center">
              <img src={"../assets/images/" + props.imgsrc} alt="Image1" className="card-img-top" />
            </div>
            <div className="card-body">
              <h4 className="card-title">{props.title}</h4>
            </div>
          </div>
          <div className="flip-card-back">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.description} </p>
            <h5>Tech Stack</h5>
            <ul classname="techstack">
              {props.techstack.map((newitem) => (
                <li>{newitem}</li>
              ))}
            </ul>
            <a href={props.gitlink} className="btn btn-outline-dark">
              Github
            </a>
          </div>
        </div>
      </div>
  
  );
};

export default Card;
