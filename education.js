import "./Css/education.css";

function EducationDetails() {
  let EducationArray = [
    {
      Duration: 2016,
      Course_name: "Bachelor of Engineering",
      institution_name: "MIT-WPU",
      Description:
        "I successfully completed a course on gamification, learning how to incorporate gaming elements and techniques into my daily work. I also enjoyed the close connection with UX that this approach brings.",
    },
    {
      Duration: 2016,
      Course_name: "Bachelor of Engineering",
      institution_name: "MIT-WPU",
      Description:
        "I successfully completed a course on gamification, learning how to incorporate gaming elements and techniques into my daily work. I also enjoyed the close connection with UX that this approach brings.",
    },
    {
      Duration: 2016,
      Course_name: "Bachelor of Engineering",
      institution_name: "MIT-WPU",
      Description:
        "I successfully completed a course on gamification, learning how to incorporate gaming elements and techniques into my daily work. I also enjoyed the close connection with UX that this approach brings.",
    },
  ];

  return (
    <>
      <div className="main-container">
        {EducationArray.map((item) => (
          <div className="parent">
            <div className="container bg-1 f-1">
              <h1>{item.Duration}</h1>
            </div>
            <div>
              <div className="mid-circle"></div>
              <span className="mid-line"></span>
            </div>
            <div className=" container-2">
              <h1>{item.Course_name}</h1>
              <h2 className="bg-1 p-1">{item.institution_name}</h2>
              <p>{item.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default EducationDetails;
