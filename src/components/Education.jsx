import { useState } from "react";

function Education(){
    const [degree, setDegree] = useState("");
    const [school, setSchool] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return(
        <div className="education">
            <h1>Education</h1>
            <input type="text" value={degree} onChange={e => setDegree(e.target.value)} placeholder="Degree" />
            <input type="text" value={school} onChange={e => setSchool(e.target.value)} placeholder="School" />
            <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            <button>Add Education</button>     
        </div>
    )
}
export default Education;