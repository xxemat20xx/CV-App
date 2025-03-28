import React from 'react'
import styles from '../modules/edu.module.css'
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
        <div className={styles.eduContainer}>
                    <div className={styles.edu_design}>
                            <div className={styles.smBox}></div>
                            <div className={styles.lgBox}></div>
                            <div className={styles.smBox}></div>
                            <div className={styles.lineDes}></div>
                       
                    </div>
            <h2>School</h2>
            <div></div>
            {educationInfo.map((educationInfo, index) => (
                <div key={index} className="">
                    <div className="">
                        <button className="" onClick={() => handleRemoveEducationBtn(index)}>&#10006;</button>
                    </div>     
                    
                    <div className="school_degree">
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

                    </div>
                    
                    <label htmlFor={`startYear-${index}`}>Start:</label>
                    <input
                        type="date"
                        id={`startYear-${index}`}
                        name="startYear"
                        value={educationInfo.startYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />

                    <label htmlFor={`endYear-${index}`}>End:</label>
                    <input
                        type="date"
                        id={`endYear-${index}`}
                        name="endYear"
                        value={educationInfo.endYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />
                </div>
            ))}
                <div className="">
                <button onClick={handleAddSchoolBtn}>&#10010; School</button>
                </div>
        
        </div>
    );
}
