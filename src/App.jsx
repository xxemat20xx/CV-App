import { useState, useRef } from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import PreviewCV from './components/PreviewCV';
import styles from '../src/modules/preview.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowsRotate, faUser, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
    // CLEAR INPUT VALUE
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
    // DOWNLOAD as PDF
    const previewRef = useRef();
    const downloadBtn = async () => {
      setIsPreviewOpen(true); // Ensure modal is open
      setTimeout(async () => {
        if (!previewRef.current) {
          console.error("previewRef is null");
          return;
        }
    
        try {
          const canvas = await html2canvas(previewRef.current, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#fff",
          });
    
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('resume.pdf');
        } catch (error) {
          console.error('Error generating PDF:', error);
        }
      }, 500); // Give time for modal to render
    };
    
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
          
        
    
          {isPreviewOpen && (
           <PreviewCV onClose={() => setIsPreviewOpen(false)} previewRef={previewRef}>

                <section className={styles.personal_container}>
                    <h1>{personalInfo.name}</h1>
                          <div className={styles.personalInfo_lineDesign}>
                                <div className={styles.lineDesign_}></div>
                                <div className={styles.boxShape_}></div>
                                <div className={styles.boxShape_lg}></div>
                                <div className={styles.boxShape_}></div>
                                <div className={styles.lineDesign_}></div>
                          </div>
                          <span>{personalInfo.jobTitle}</span>
                          <div className={styles.preview_contactInfo}>
                            <box-icon type='solid' name='location-plus' color="#14FFEC"></box-icon>
                            <p>{personalInfo.address}</p>

                            <box-icon type='solid' name='envelope' color="#14FFEC"></box-icon>
                            <p>{personalInfo.email}</p>

                            <box-icon name='phone' type='solid' color='#14ffec' ></box-icon>
                            <p>{personalInfo.phone}</p>
                          </div>
                </section>
                <section className={styles.bottom_content}>
                      <div className={styles.leftPanel}>
                                <div className={styles.panel_design}>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lgBox}></div>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lineDes}></div>
                                </div>
                                <div className="previewAboutMe">
                                      <h2>About Me</h2>
                                      <p>{summary}</p>
                                </div>
                                <div className="previewSchool">
                                <div className={styles.panel_design}>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lgBox}></div>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lineDes}></div>
                                </div>
                                  <h2>School</h2>
                                    {educationInfo.map((edu,index) => (
                                      <div key={index}>
                                          <p><strong>{edu.school}</strong></p>
                                          <span>{edu.degree}</span>
                                          <p><strong>{edu.startYear}<span>-</span>{edu.endYear}</strong></p>
                                      </div>
                                    ))}
                                </div>
                                <div className="previewSkill">
                                <div className={styles.panel_design}>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lgBox}></div>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lineDes}></div>
                                </div>
                                  <h2>Skill</h2>
                                  {skill.map((skill, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li key={index}>{skill}</li>
                                        </ul>
                                    </div>
                                  ))}
                                </div>
                      </div>
                      <div className={styles.lineDivider}></div>
                      <div className={styles.rightPanel}>
                              <div className="previewWorkExp">
                              <div className={styles.panel_design}>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lgBox}></div>
                                        <div className={styles.smBox}></div>
                                        <div className={styles.lineDes}></div>
                                </div>
                                <h3>Work Experience</h3>
                                {workExpInfo.map((workExp, index) => (
                                  <div key={index} className='experience-entry'>
                                        <div className="design-content">
                                            <div className='design diamond'></div>
                                            <div className='design line'></div>
                                         </div>
                                         <div className="workExpContent">
                                            <h3><strong>{workExp.position}</strong></h3>
                                            <p>{workExp.workplace}</p>
                                            <p><strong>{workExp.startYear} - {workExp.endYear}</strong></p>
                                            <p>{workExp.jobDescription}</p>
                                         </div>
                                  </div>
                                ))}
                              </div>
                      </div>
                </section>
      
            </PreviewCV>
          )}
              <div className="navbar_buttons">
              <button onClick={downloadBtn} className='icon' data-tooltip="Download"><FontAwesomeIcon icon={faArrowDown} /></button>
              <button onClick={previewCV} className='icon' data-tooltip="View"><FontAwesomeIcon icon={faEye} /></button>
              <button onClick={clearBtn} data-tooltip="Clear" className='icon'><FontAwesomeIcon icon={faArrowsRotate} /></button>
              <button onClick={generateUser} data-tooltip="Generate User" className='icon'><FontAwesomeIcon icon={faUser} /></button>
          </div>
    </section>
    
    </>
  )
}


export default App