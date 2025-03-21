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
        {workExpInfo.map((workExpInfo, index) => (
            <div key={index}>
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

                <input type="date" 
                name= "startYear"
                value={workExpInfo.startYear}
                onChange={(e) => handleWorkExpChange(index, e)}
                />

                <input type="date" 
                name= "endYear"
                value={workExpInfo.endYear}
                onChange={(e) => handleWorkExpChange(index, e)}
                />
                <textarea 
                name="jobDescription"
                value={workExpInfo.jobDescription}
                onChange={(e) => handleWorkExpChange(index, e)}
                placeholder="Your job responsibility.."
                />
                 <button onClick={() => handleRemoveExperienceBtn(index)}>Remove</button>
            </div>
        ))}
        <button onClick={handleAddExperienceBtn}>Add Experience</button>
    </div>
  )
}
