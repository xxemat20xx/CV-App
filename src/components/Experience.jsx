import { useState } from "react";
function Experience(){
    const [workExperiences, setWorkExperiences] = useState([
        { experience: "", jobTitle: "", company: "", startDate: "", endDate: "" }
    ]);

    const handleExperienceChange = (index, field, value) => {
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences[index][field] = value;
        setWorkExperiences(newWorkExperiences);
    };

    const handleAddExperience = () => {
        setWorkExperiences([
            ...workExperiences, 
            { experience: "", jobTitle: "", company: "", startDate: "", endDate: "" }
        ]);
    };

    return (
        <div className="experience">
            <h1>Experience</h1>

            {workExperiences.map((workExperience, index) => (
                <div key={index} className="experience-entry">
                    <input
                        type="text"
                        value={workExperience.experience}
                        onChange={(e) => handleExperienceChange(index, "experience", e.target.value)}
                        placeholder="Experience"
                    />
                    <input
                        type="text"
                        value={workExperience.jobTitle}
                        onChange={(e) => handleExperienceChange(index, "jobTitle", e.target.value)}
                        placeholder="Job Title"
                    />
                    <input
                        type="text"
                        value={workExperience.company}
                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                        placeholder="Company"
                    />
                    <input
                        type="text"
                        value={workExperience.startDate}
                        onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                        placeholder="Start Date"
                    />
                    <input
                        type="text"
                        value={workExperience.endDate}
                        onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                        placeholder="End Date"
                    />
                </div>
            ))}

            <button onClick={handleAddExperience}>
                Add Experience
            </button>
        </div>
    );
}

export default Experience;