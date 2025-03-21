import { useState } from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience';
function App() {
  // Handle Personal Info state
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    contact: "",
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  
  };
  // Handle Summary State
  const [summary, setSummary] = useState("");
  
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
  return (
    <div className='cv-form'> 
      <PersonalDetails personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
      <Summary value={summary} onChange={setSummary} />
      <Education educationInfo={educationInfo} onChange={handleEducationChange}/>
      <WorkExperience workExpInfo={workExpInfo} onChange={handleWorkExpChange}/>
    </div>
  )
}

export default App