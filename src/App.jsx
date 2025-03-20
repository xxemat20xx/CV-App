import React from 'react'
import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails'
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    contact: "",
  });
  console.log(personalInfo)
  const handlePersonalInfoChange = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  
  };
  return (
    <div className='cv-form'>
      <form>  
      <PersonalDetails personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
      </form>
      <p>{personalInfo.name}</p>
      <p>{personalInfo.age}</p>
      <p>{personalInfo.address}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.contact}</p>
    </div>
  )
}

export default App