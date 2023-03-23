import logo from './logo.svg';
import './App.css';
import SelectPortfolio from './components/SinglePortfolio/SelectPortfolio';
import { useEffect, useState } from 'react';
import dataServiceObj from './services/Services';
import Home from './components/Home/home';
import AboutMe from './components/AboutMe/about';
import EducationDetails from './components/Education/education';
import Cards from './components/projects/cards';
import Skills from './components/Skills/Skills';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import "./components/Education/Css/navbar.css"
import Contact from './components/Contact/Contact';
import { ArrowDownCircleFill } from 'react-bootstrap-icons/dist';


function App() {


  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState([]);

  function getProfiles(){
    dataServiceObj.getProfiles().then((resData)=>{
      setProfiles(resData.data);
    })
  }
  
  useEffect(() => {
    return () => {
      getProfiles();
    }
  }, [])
  

  return (
    <BrowserRouter>
      <div className="App">
        <SelectPortfolio profiles={profiles} setSelectedProfile={setSelectedProfile}/>
        {selectedProfile.pno ? 
        <>
        <nav className='navbar' style={{ backgroundColor: "color: rgba (0, 0, 0, 0.5);" }}>
        <Link to="#home" className='home'>Home</Link> 
        <Link to="#about" className='about'>About Me</Link> 
        <Link to="#education" className='education'>Education</Link> 
        <Link to="#projects" className='projects'>Projects</Link> 
        <Link to="#skills" className='skills'>Skills</Link> 
        <Link to="#contact" className='contact'>Contact</Link>  
        <ArrowDownCircleFill color="beige" size={30} style={{cursor:"pointer"}}/>
        </nav>
          <Home selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile}/>
          <AboutMe selectedProfile={selectedProfile} />
          <EducationDetails selectedProfile={selectedProfile} />
          <Cards selectedProfile={selectedProfile}  />
          <Skills selectedProfile={selectedProfile}/>
          <Contact selectedProfile={selectedProfile} />

        </> : console.log(selectedProfile)}
      </div>
    </BrowserRouter>
  );
}

export default App;
