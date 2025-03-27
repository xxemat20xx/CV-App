import React from 'react'
import styles from '../modules/summary.module.css'
export default function Summary({value, onChange}) {
  return (
    <div className={styles.summary_container}>
        <h2>About me</h2>
        <textarea 
            placeholder='Write something about yourself...'
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    </div>
  )
}
