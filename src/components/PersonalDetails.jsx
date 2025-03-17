import { useState } from "react";
function PersonalInfo(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return(
        <div className="personal-info">
            <h1>Personal Information</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
        </div>
    )
    
}
export default PersonalInfo;