import { useState } from "react";

function Summary({ onChange }) {
    const [summary, setSummary] = useState("");
    const handleSummaryChange = (e) => {
        const updatedSummary = e.target.value;
        setSummary(updatedSummary);
        onChange(updatedSummary);
    }
    return(
        <div className="summary-container">
            <h2>About Me</h2>
            <textarea
            value={summary} 
            onChange={handleSummaryChange} 
            placeholder="Enter a summary about yourself..."
            /> 
        </div>
    )
}

export default Summary;
