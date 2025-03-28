import { use, useState } from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import PreviewCV from './components/PreviewCV';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowsRotate, faUser  } from "@fortawesome/free-solid-svg-icons";
function App() {
  // Handle Personal Info state
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    jobTitle: "",
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  
  };
  // Handle Summary State
  const [summary, setSummary] = 
  useState("");
  
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
      {position: "", workplace: "", startYear: "", endYear:"", jobDescription: ""}
      ]);
    const handleWorkExpChange = (updatedWork) => {
      setWorkExpInfo(updatedWork);
    }
    //handle skill 
    const [skill, setSkill] = useState([]);

    //const handlePreview
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const previewCV = () => {
      setIsPreviewOpen(true);
    }
    const generateUser = () => {
      const generatePersonalDetails = {
        name: "John Doe",
        address: "123 Main St, New York, NY",
        email: "johndoe@example.com",
        phone: "+1 555-1234",
        jobTitle: "Software Engineer",
      }
      setPersonalInfo(generatePersonalDetails)
      // generate about me
      const generateAboutMe = 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse expedita, aut consequuntur, voluptate saepe rem placeat dolorem ipsam modi adipisci, nisi ea veritatis accusantium. Excepturi ipsam quaerat ad fugiat!";
      setSummary(generateAboutMe)

      // generate school
      const generateSchool = [{
        school: "Manila University",
        degree: "Computer Engineer",
        startYear: "2021",
        endYear: "2025",
      }];
      setEducationInfo(generateSchool)
      
      // generate skill
      const generateSkill = ["HTML", "CSS", "Javascript", "Webpack", "Graphic Design"];
      setSkill(generateSkill)
      
      // genereta workexperience
      const generateWork = [
        {position: "Software Engineer", 
        workplace: "Metro Manila", 
        startYear: "2022", 
        endYear:"2025", 
        jobDescription: "Lorem ipsum blablabla Lorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablabla"
        },
        {position: "Software Engineer", 
          workplace: "Manila Corporation", 
          startYear: "2022", 
          endYear:"2025", 
          jobDescription: "Lorem ipsum blablabla Lorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablabla"
          },
          {position: "Web Developer", 
            workplace: "Makati Corporation", 
            startYear: "2019", 
            endYear:"2022", 
            jobDescription: "Lorem ipsum blablabla Lorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablablaLorem ipsum blablabla"
            }
        ];
        setWorkExpInfo(generateWork);
    }
    const clearBtn = () => {
        setPersonalInfo({
          name: "",
          address: "",
          email: "",
          phone: "",
          jobTitle: "",
        });
        setSummary("");
        setEducationInfo([{
          school: "",
          degree: "",
          startYear: "",
          endYear: "",
        }]);
        setWorkExpInfo([{
          position: "", 
          workplace: "", 
          startYear: "", 
          endYear:"", 
          jobDescription: ""
        }]);
        setSkill([""]);
    }
  return (
    <>
      <section className='cv-form'> 
        <div className="container">
            <PersonalDetails personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
            <div className="bottom-content">
                <div className="left-panel">
                <Summary value={summary} onChange={setSummary}/>
                <Education educationInfo={educationInfo} onChange={handleEducationChange}/>
                <Skills value={skill} onChange={setSkill}/>
                </div>
                <div className="line-divider"></div>
                <div className="right-panel">
                <WorkExperience workExpInfo={workExpInfo} onChange={handleWorkExpChange}/>
             
                </div>
         
            </div>
        </div>
          
            {/* <button onClick={previewCV}>Preview</button> */}
    
          {/* {isPreviewOpen && (
            <PreviewCV onClose={() => setIsPreviewOpen(false)}>
                <div className="container">
                    <div className="sidepanel-content">
                        <div className="personal-info">
                        <h1 id='personalInfo-name'>{personalInfo.name}</h1>
                        <div className="underline"></div>
                        <div className="other-personal-info">
                            <div className="input-content">
                            <box-icon type='solid' name='location-plus' color='#3F7D58'></box-icon>
                            <span>{personalInfo.address}</span>
                            </div>
                            <div className="input-content">
                            <box-icon name='envelope' type='solid' color='#3F7D58' ></box-icon>
                            <span>{personalInfo.email}</span>
                            </div>
                            <div className="input-content">
                            <box-icon name='phone-call' type='solid' color='#3F7D58'></box-icon>
                            <span>{personalInfo.contact}</span>
                            </div>
                        </div>
                        </div>
                        <div className="summary-container">
                        <h2>About Me</h2>
                        <div className="underline"></div>
                        <p>{summary}</p>
                    </div>
                    </div>

                    <div className="rightpanel-content">
                        <h2>Education</h2>
                        <div className="underline"></div>
                        {educationInfo.map((edu,index) => (
                          <div key={index} className='education-container'>
                              <div>
                                  <p id='degree'>{edu.degree}</p>
                                  <p>{edu.school}</p>
                                  <h4>Start Year:</h4>
                                  <p>{edu.startYear}</p>
                                  <h4>End Year:</h4>
                                  <p>{edu.endYear}</p>
                              </div>
                          </div>
                        ))}
                  
                        {workExpInfo.map((workExp, index) => (
                         
                          <div key={index} className='experience-container'>
                                  <h2>Work Experience</h2>
                                  <div className="underline"></div>
                                <p id='jobPosition'>{workExp.position}</p>
                                <p>{workExp.workplace}</p>
                                <h4>Start Date:</h4>
                                <p>{workExp.startYear}</p>
                                <h4>End Date:</h4>
                                <p>{workExp.endYear}</p>
                                <h4>Job Description</h4>
                                <p>{workExp.jobDescription}</p>
                          </div>
                        ))}
                    </div>
                </div>
               
            </PreviewCV>
          )} */}
                <div className="navbar_buttons">
              <button><FontAwesomeIcon icon={faEye} /></button>
              <button onClick={clearBtn}><FontAwesomeIcon icon={faArrowsRotate} /></button>
              <button onClick={generateUser}><FontAwesomeIcon icon={faUser} /></button>
          </div>
    </section>
    
    </>
  )
}


export default App