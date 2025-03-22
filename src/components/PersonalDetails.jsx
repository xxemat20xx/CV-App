import 'boxicons'
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
      <div className="underline"></div>
      <div className="other-personal-info">
      <div className="input-content">
      <box-icon type='solid' name='location-plus' color='#3F7D58'></box-icon>
      <input type="text" 
      name="address"
      value={personalInfo.address}
      onChange={handleOnChange}
      placeholder="Enter your address"
      />
      </div>
      <div className="input-content">
      <box-icon name='envelope' type='solid' color='#3F7D58' ></box-icon>
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handleOnChange}
        placeholder="Enter Email"
      />
      </div>
      <div className="input-content">
      <box-icon name='phone-call' type='solid' color='#3F7D58'></box-icon>
      <input
        type="text"
        name="contact"
        value={personalInfo.contact}
        onChange={handleOnChange}
        placeholder="Enter Contact Number"
      />
      </div>
      </div>
    </div>
  );
}
