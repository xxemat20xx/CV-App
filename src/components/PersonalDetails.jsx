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
      
      <div className="name-content">
        <textarea 
          name="name"
          value={personalInfo.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="other-personal-info">
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
    </div>
  );
}
