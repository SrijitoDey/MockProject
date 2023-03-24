import './home.css'

function Home({selectedProfile, setSelectedProfile}){
    return (
        <div id='home'>

            <div id='res-back'>
                <div id='cover'>
                </div>
            </div>

            <div id='text-cont'>
                <div id='info-box'>
                <h1 id='author'>{ selectedProfile.aboutme.name }</h1>
                <h4 id='res-text'>.. MY INTERACTIVE RESUME</h4>
                
                <a id='prof-sel' href='#' onClick={()=>{
                    document.getElementsByClassName("mainWrapper")[0].style.display = "flex"; 
                    setSelectedProfile({});
                    }}>(Choose A Different Profile)</a>    
                </div>
            </div>


        </div>
    );

}

export default Home; 