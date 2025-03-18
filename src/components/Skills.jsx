import { useState } from "react";
function Skill({onChange}){
    const [skill, setSkill] = useState("");
    const [skills, setSkills] = useState([]);
    const handleSkillChange = (e) => {
        setSkill(e.target.value);
    }
    const addSkill = () => {
        setSkills([...skills, skill]);
        setSkill("");
    }
    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    }
    return(
        <div className="skills">
            <h2>Skills/Certification</h2>
            <div className="form-group">
                <input type="text" value={skill} onChange={handleSkillChange} placeholder="Enter a skill"/>
                <button onClick={addSkill}>Add</button>
            </div>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill}
                        <button onClick={() => removeSkill(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Skill;