import { useState } from "react";
function Skill(){
    const [skill, setSkill] = useState("");
    return(
        <div className="skill">
            <h1>Skills</h1>
            <input type="text" value={skill} onChange={e => setSkill(e.target.value)} placeholder="Enter a skill..." />
            <button>Add Skill</button>
        </div>
    )
}
export default Skill;