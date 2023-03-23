import { useState } from "react";
import SinglePortfolio from "./SinglePortfolio";
import "./selectPortfolio.css";



function SelectPortfolio({ setName, profiles, setSelectedProfile }) {
  return (
    <>
      <div className="mainWrapper">
        <div className="selectPortfolioContainer">
          <h1 className="selectPortfolioTitle">Select a Portfolio</h1>
          <div className="portfolios">
            {profiles.map((profile)=>{
              return(
                <SinglePortfolio profile={profile} setSelectedProfile={setSelectedProfile} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectPortfolio;
