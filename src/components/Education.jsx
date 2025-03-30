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
                <div key={index} className={styles.educationEntry}>
                    <div className={styles.eduBtn}>
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
                    
                   
                    <input
                        type="number"
                        id={`eduStartYr-${index}`}
                        name="startYear"
                        min="1900"
                        placeholder="Start Year"
                        value={educationInfo.startYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />
                     <span><strong>-</strong></span>
                    <input
                        type="number"
                        id={`eduEndYr-${index}`}
                        name="endYear"
                        min="1900"
                        placeholder="End Year"
                        value={educationInfo.endYear}
                        onChange={(e) => handleEducationChange(index, e)}
                    />
                </div>
            ))}
                <div className={styles.addBtn}>
                <button onClick={handleAddSchoolBtn}>&#10010; School</button>
                </div>
        
        </div>
    );
}
