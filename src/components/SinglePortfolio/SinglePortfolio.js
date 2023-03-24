function SinglePortfolio({profile, setSelectedProfile}) {

    function chooseProfile(){
      setSelectedProfile(profile)
      console.log(profile);
      document.getElementsByClassName("mainWrapper")[0].style.display = "none";
    }

    return (
    <>
      <div className="portfolioDiv">
        <div className="portfolioLeft">
            <img src= { "../assets/images/" + profile.aboutme.image }  />
        </div>
        <div className="portfolioRight">
            <h2>{profile.aboutme.name }</h2>
            <button onClick={chooseProfile}>Open Portfolio</button>
        </div>
      </div>
    </>
    );
  }
  
  export default SinglePortfolio;