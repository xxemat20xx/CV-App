import { useState } from "react";
function Experience({onChange}){
    const [workExperience, setWorkExperience] = useState([
        {jobTitle: "", company: "", startDate: "", endDate: ""}
    ]);
    const handleExperienceChange = (index, data) => {
        const newExperience = [...workExperience];
        newExperience[index] = data;
        setWorkExperience(newExperience);
        onChange(newExperience);
    }
    const handleAddExperience = () => {
        setWorkExperience([...workExperience, {jobTitle: "", company: "", startDate: "", endDate: ""}]);
    }
    const handleRemoveExperience = (index) => {
        const newExperience = [...workExperience];
        newExperience.splice(index, 1);
        setWorkExperience(newExperience);
    }
    return(
        <div className="experience-container">
            <h2>Experience</h2>
            {workExperience.map((experience, index) => (
                <div key={index} className="experience-item">
                    <input type="text" placeholder="Job Title" value={experience.jobTitle} onChange={(e) => handleExperienceChange(index, {...experience, jobTitle: e.target.value})} />
                    <input type="text" placeholder="Company" value={experience.company} onChange={(e) => handleExperienceChange(index, {...experience, company: e.target.value})} />
                    <input type="date" placeholder="Start Date" value={experience.startDate} onChange={(e) => handleExperienceChange(index, {...experience, startDate: e.target.value})} />
                    <input type="date" placeholder="End Date" value={experience.endDate} onChange={(e) => handleExperienceChange(index, {...experience, endDate: e.target.value})} />
                    <button onClick={() => handleRemoveExperience(index)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    )
}

export default Experience;