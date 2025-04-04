import React from 'react'
import styles from '../modules/skill.module.css'

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
    <div className={styles.skills_container}>
       <div className={styles.skill_design}>
                                  <div className={styles.smBox}></div>
                                  <div className={styles.lgBox}></div>
                                  <div className={styles.smBox}></div>
                                  <div className={styles.lineDes}></div>
                             
                          </div>
        <h2>Skills</h2>
        {value.map((skill, index) => (
            <div key={index} className={styles.skillContent}>
                <input type="text" 
                placeholder='e.g., Communcation'
                id={`skills-${index}`}
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}/>
                <button onClick={() => handleRemoveSkill(index)}>&#10006;</button>
            </div>
        ))}
        <button onClick={handleAddSkillBtn} className={styles.addSkill}>&#10010; Skill</button>
    </div>
  )
}
