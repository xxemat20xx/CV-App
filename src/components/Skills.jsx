import React from 'react'

export default function Skills({value, onChange}) {
  const handleAddSkillBtn = () => {
    onChange([...value, ""]);
  }
  const handleSkillChange = (index, event) => {
    const updatedSkill = [...value];
    updatedSkill[index] = event.target.value;
    onChange(updatedSkill);
  }
  const handleRemoveSkill = (index) => {
    const updatedSkill = value.filter((_, i) => i !==index);
        onChange(updatedSkill)
  }
  return (
    <div className='skills-container'>
        <h2>Skills</h2>
        {value.map((skill, index) => (
            <div key={index}>
                <input type="text" 
                placeholder='e.g., Communcation'
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}/>
                <button onClick={() => handleRemoveSkill(index)}>Remove</button>
            </div>
        ))}
        <button onClick={handleAddSkillBtn}>&#10010; Skill</button>
    </div>
  )
}
