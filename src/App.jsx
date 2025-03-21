import { useState } from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
function App() {
  // Handle Personal Info state
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Dave Doe",
    address: "Manila, Philippines",
    email: "johndavedoe@gmail.com",
    contact: "09091234569",
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  
  };
  // Handle Summary State
  const [summary, setSummary] = 
  useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto autem quas ipsa voluptas aperiam quis blanditiis enim. Mollitia nesciunt praesentium recusandae corporis est? Veritatis necessitatibus labore eos asperiores a.");
  
  // Handle education
  const [educationInfo, setEducationInfo] = useState([
    {
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    }
    ]);
    const handleEducationChange = (updatedEducation) => {
    setEducationInfo(updatedEducation);
    }
    // Handle Work Experience
    const [workExpInfo, setWorkExpInfo] = useState([
      {position: "", workplace: "", startYear: "", endYear: "", jobDescription: ""}
      ]);
    const handleWorkExpChange = (updatedWork) => {
      setWorkExpInfo(updatedWork);
    }
    //handle skill 
    const [skill, setSkill] = useState([]);
  return (
    <div className='cv-form'> 
      <div className='container'>
      <div className="sidepanel-content">
      <PersonalDetails personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
      <Summary value={summary} onChange={setSummary} />
      </div>
      
      <div className='rightpanel-content'>
      <Education educationInfo={educationInfo} onChange={handleEducationChange}/>
      <WorkExperience workExpInfo={workExpInfo} onChange={handleWorkExpChange}/>
      <Skills value={skill} onChange={setSkill}/>
      </div>
      </div>
    </div>
  )
}

export default App