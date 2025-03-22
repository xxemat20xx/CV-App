import React from 'react'

export default function PreviewCV({onClose, children}) {
  return (
    <div className="preview-overlay">
        <div className="cv-form previewCV-content">
            {children}
            <button onClick={onClose} className='btn close-btn'>Close</button>
        </div>
    </div>
  )
}
