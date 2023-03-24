import './about.css'

function AboutMe({selectedProfile}) {
    return (
        <div id='about'>

            <div id='div-o'>

                <div id='image-box'>
                    <img id='photo' src= { "../assets/images/" + selectedProfile.aboutme.image } />
                </div>

                <div id='div-i'>

                    <div id='heading'>
                        <h3 id='head-text'>
                            About Me.
                        </h3>
                    </div>

                    <div id='about-section'>
                        <p id='text-about'>{ selectedProfile.aboutme.summary }</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutMe;