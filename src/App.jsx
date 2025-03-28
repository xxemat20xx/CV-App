import { use, useState } from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import PreviewCV from './components/PreviewCV';
import boxicons from 'boxicons';
function App() {
  // Handle Personal Info state
  const [personalInfo, setPersonalInfo] = useState({
    name: "Johny Jon Doe Jr. ",
    address: "Manila, Philippines",
    email: "johndavedoe@gmail.com",
    phone: "09091234569",
    jobTitle: "Web Developer",
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
    school: "Manila University",
    degree: "Information Tech.",
    startYear: "2021-03-03",
    endYear: "2025-03-03",
    }
    ]);
    const handleEducationChange = (updatedEducation) => {
    setEducationInfo(updatedEducation);
    }
    // Handle Work Experience
    const [workExpInfo, setWorkExpInfo] = useState([
      {position: "Web Developer", workplace: "Manila Data Corp.", startYear: "2021-05-05", endYear: "2025-06-06", jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto autem quas ipsa voluptas aperiam quis blanditiis enim. Mollitia nesciunt praesentium recusandae corporis est? Veritatis necessitatibus labore eos asperiores a."}
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
    </section>
    <div className="navbar_buttons">
        <button>Preview</button>
        <button>Clear</button>
        <button>Genarate</button>
    </div>
    </>
  )
}


export default App