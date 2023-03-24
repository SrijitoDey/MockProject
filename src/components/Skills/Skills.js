import "./skills.css"

function Skills({ selectedProfile }) {
  return (
    <>
      <div className="skillsContainer" id="skills">
        <h1>My Skills</h1>
        <div className="skillsWrapper">
            {selectedProfile.professional.skills.map((elem) => {
            return (
                <div className="innerSkillContainer">
                <h3>{elem.skill}</h3>
                <div class="progress">
                    <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: elem.level*20 + "%", fontWeight: "bold"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >{elem.level*20}%</div>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    </>
  );
}

export default Skills;
