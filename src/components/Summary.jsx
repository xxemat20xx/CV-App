import { useState } from "react";
function Summary(){
    const [summary, setSummary] = useState("");
    return(
        <div className="summary">
            <h1>Summary</h1>
            <textarea value={summary} onChange={e => setSummary(e.target.value)} placeholder="Enter a summary about yourself..."></textarea>
        </div>
    )
}
export default Summary;