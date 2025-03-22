import React from 'react'
export default function Education({educationInfo, onChange}) {
    const handleEducationChange = (index, event) =>{
   
        const {name, value} = event.target;
        const updatedEducation = [...educationInfo];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        }
        onChange(updatedEducation);
    };
    const handleAddSchoolBtn = () => {
        onChange([
            ...educationInfo,
            {
             school: "",
             degree: "",
             startYear: "",
             endYear: ""
            }
        ]);
    }
    const handleRemoveEducationBtn = (index) => {
        const updatedEducation = educationInfo.filter((_, i) => i !== index);
        onChange(updatedEducation);
      };
    return (
        <div className='education-container'>
            <h2>School</h2>
            <div className="underline"></div>
            {educationInfo.map((educationInfo, index) => (
                <div key={index} className="education-entry">
                    <input
                        type="text"
                        name="school"
                        value={educationInfo.school}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="School/University"
                    />

                    <input
                        type="text"
                        name="degree"
                        value={educationInfo.degree}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Degree"
                    />

                    <label htmlFor={`startYear-${index}`}>Start Date:</label>
                    <input
                        type="date"
                        id={`startYear-${index}`}
                        name="startYear"
                        value={educationInfo.startYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />

                    <label htmlFor={`endYear-${index}`}>End Year:</label>
                    <input
                        type="date"
                        id={`endYear-${index}`}
                        name="endYear"
                        value={educationInfo.endYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />
                    <div className="educations-buttons">
                    <button onClick={() => handleRemoveEducationBtn(index)}>&#10006;</button>
                    </div>
                    
                </div>
            ))}
                <div className="educations-buttons">
                <button onClick={handleAddSchoolBtn}>&#10010; School</button>
                </div>
        
        </div>
    );
}
