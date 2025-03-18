import { useState } from "react";
function PersonalInfo({onChange}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleOnChange = () => {
        const personalDetails = {
            name: name,
            age: age,
            email: email,
            phone: phone,
        };
        onChange(personalDetails);
    }
    return(
        <div className="personal-info">
            <input type="text" 
            value={name} 
            onChange={e =>{setName(e.target.value);
            handleOnChange();
            }}
            placeholder="Enter your name" />

            <input type="number" 
            value={age} 
            onChange={e =>{setAge(e.target.value);
            handleOnChange();
            }}
            placeholder="Enter your age" />
            <input type="text" 
            value={email} 
            onChange={e =>{setEmail(e.target.value);
            handleOnChange();
            }}
            placeholder="Enter your email" />
            <input type="text" 
            value={phone} 
            onChange={e =>{setPhone(e.target.value);
            handleOnChange();
            }}
            placeholder="Enter your phone number" />

        </div>
    )

}
export default PersonalInfo;