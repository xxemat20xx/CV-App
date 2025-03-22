import React from 'react'

export default function WorkExperience({workExpInfo, onChange}) {
  const handleWorkExpChange = (index, event) => {
    const {name, value} = event.target;
    const updatedWorkExp = [...workExpInfo];
    updatedWorkExp[index] = {
        ...updatedWorkExp[index],
        [name]: value,
    }
    onChange(updatedWorkExp)
  }
  const handleAddExperienceBtn = () => {
    onChange([
        ...workExpInfo,
        {position: "", workplace: "", startYear: "", endYear: "", jobDescription: ""}
    ]);
  };
  const handleRemoveExperienceBtn = (index) => {
    const updatedWorkExp = workExpInfo.filter((_, i) => i !== index);
    onChange(updatedWorkExp);
  };
  return (
    <div className='experience-container'>
      <h2>Work Experience</h2>
      <div className="underline"></div>
        {workExpInfo.map((workExpInfo, index) => (
            <div key={index} className="experience-entry">
                <input type="text" 
                name= "position"
                value={workExpInfo.position}
                onChange={(e) => handleWorkExpChange(index, e)}
                placeholder='Your job position'/>

                <input type="text" 
                name= "workplace"
                value={workExpInfo.workplace}
                onChange={(e) => handleWorkExpChange(index, e)}
                placeholder='Company Inc.'/>

                <label htmlFor={`startYear-${index}`}>Start Date:</label>
                <input type="date"
                 id={`startYear-${index}`}
                name= "startYear"
                value={workExpInfo.startYear}
                onChange={(e) => handleWorkExpChange(index, e)}
                />

                <label htmlFor={`endYear-${index}`}>Start Date:</label>
                <input type="date" 
                name= "endYear"
                id={`endYear-${index}`}
                value={workExpInfo.endYear}
                onChange={(e) => handleWorkExpChange(index, e)}
                />
                <textarea 
                name="jobDescription"
                value={workExpInfo.jobDescription}
                onChange={(e) => handleWorkExpChange(index, e)}
                placeholder="Job Description.."
                />
                  <div className="experience-buttons">
                  <button onClick={() => handleRemoveExperienceBtn(index)}>&#10006;</button>
                  </div>

            </div>
        ))}
        <button onClick={handleAddExperienceBtn}>&#10010; Experience</button>
    </div>
  )
}
