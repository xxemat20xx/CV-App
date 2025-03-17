import { useState } from "react";
function Experience(){
    const [jobTitle, setJobTitle] = useState("");
    const [employer, setEmployer] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="experience">
            <h1>Experience</h1>
            <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="Job Title" />
            <input type="text" value={employer} onChange={e => setEmployer(e.target.value)} placeholder="Employer" />
            <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
        </div>
    )
}

export default Experience;