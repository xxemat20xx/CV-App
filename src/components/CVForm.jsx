import PersonalInfo from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";
import Skill from "./Skills";
import Education from "./Education";
function CVForm(){

    
    return(
        <div className="cv-form">
            <PersonalInfo />
            <Summary />
            <Experience />
            <Skill />
            <Education />
        </div>
    )
}
export default CVForm;