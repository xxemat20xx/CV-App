import 'boxicons'
import styles from '../modules/personalContainer.module.css'
export default function PersonalDetails({ personalInfo, onChange }) {
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    onChange({
      ...personalInfo,
      [name]: value,
    });
  };
  
  return (
    <section className={styles.personal_container}>
       
        <div className={styles.name_jobTitle}>
            <div className={styles.name_jobTitle_content}>

                  <textarea 
                      name='name'
                      placeholder='Enter your name'
                      id='name'
                      value={personalInfo.name}
                      onChange={handleOnChange}
                  />
                  <div className={styles.personalInfo_lineDesign}>
                        <div className={styles.lineDesign_}></div>
                        <div className={styles.boxShape_}></div>
                        <div className={styles.boxShape_lg}></div>
                        <div className={styles.boxShape_}></div>
                        <div className={styles.lineDesign_}></div>
                  </div>
                  <input type="text" 
                          name='jobTitle'
                          value={personalInfo.jobTitle}
                          onChange={handleOnChange}
                          placeholder='Enter your job title'/>
            </div>
            </div>
            <div className={styles.contact_container}>
                  <box-icon type='solid' name='location-plus' color="#14FFEC"></box-icon>
                  <input type="text" 
                          name='address'
                          value={personalInfo.address}
                          onChange={handleOnChange}
                          placeholder='Enter your address'/>

                  <box-icon type='solid' name='envelope' color="#14FFEC"></box-icon>
                  <input type="text" 
                          name='email'
                          value={personalInfo.email}
                          onChange={handleOnChange}
                          placeholder='Enter your email'/>

                  <box-icon name='phone' type='solid' color='#14ffec' ></box-icon>
                  <input type="text" 
                          name='phone'
                          value={personalInfo.phone}
                          onChange={handleOnChange}
                          placeholder='Enter your phone'/>
            </div>
    
    </section>
  );
}
