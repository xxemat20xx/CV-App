import React from "react";

export default function PersonalDetails({ personalInfo, onChange }) {
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    onChange({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <div className="personal-info">
      <input
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={handleOnChange}
        placeholder="Enter Name"
      />
      <input
        type="number"
        name="age"
        value={personalInfo.age}
        onChange={handleOnChange}
        placeholder="Enter Age"
      />
      <input type="text" 
      name="address"
      value={personalInfo.address}
      onChange={handleOnChange}
      placeholder="Enter your address"
      />

      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handleOnChange}
        placeholder="Enter Email"
      />
      <input
        type="text"
        name="contact"
        value={personalInfo.contact}
        onChange={handleOnChange}
        placeholder="Enter Contact Number"
      />
    </div>
  );
}
