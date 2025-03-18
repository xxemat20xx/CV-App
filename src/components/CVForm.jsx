import PersonalInfo from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";
import Skill from "./Skills";
import Education from "./Education";
import { useState } from "react";
function CVForm(){
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        age: "",
        email: "",
        phone: ""
    });
    
    const handlePersonalInfoChange = (data) => {
        setPersonalInfo(data);
    }
    const [summary, setSummary] = useState("");
    const handleSummaryChange = (newSummary) => {
        setSummary(newSummary)
     
    }
    const [experience, setWorkExperience] = useState({
        jobTitle: "", company: "", startDate: "", endDate: ""
    })
 
    const handleExperienceChange = (data) => {
        setWorkExperience(data);
    }
    const [skill, setSkills] = useState("");
    const handleSkillChange = (newSkill) => {
        setSkills(skill)
    }
    return(
    <div className="cv-form">
        <PersonalInfo onChange={handlePersonalInfoChange} />
        <Summary onChange={handleSummaryChange} />
        <Education />
        <Experience onChange={handleExperienceChange}/>
        <Skill onChange={handleExperienceChange} />
    </div>  
    )
}
export default CVForm;