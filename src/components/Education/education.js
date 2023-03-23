import "./Css/education.css";

function EducationDetails({selectedProfile}) {
  
  return (
    <>
      <div className="main-container" id="education">
        {selectedProfile.education.map((item) => (
          <div className="parent">
            <div className="container bg-1 f-1">
              <h1 className="f-2" style={{textAlign: "center"}}>{item.yop}</h1>
            </div>
            <div>
              <div className="mid-circle"></div>
              <span className="mid-line"></span>
            </div>
            <div className=" container-2">
              <h1 className="f-2">{item.course}</h1>
              <h2 className="bg-1 f-1">{item.institution}</h2>
              <p>{item.location}</p>
              <p>{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default EducationDetails;
