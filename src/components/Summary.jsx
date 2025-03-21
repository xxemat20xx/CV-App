import React from 'react'

export default function Summary({value, onChange}) {
  return (
    <div className='summary-container'>
        <h2>About me</h2>
        <textarea 
            placeholder='Write something about yourself...'
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    </div>
  )
}
