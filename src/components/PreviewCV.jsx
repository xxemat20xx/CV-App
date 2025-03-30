import React from 'react'
import styles from '../modules/preview.module.css'
export default function PreviewCV({onClose, children, previewRef }) {
  return (
    <div className={styles.previewCV_overlay}>
        <div className={styles.previewCV_content} ref={previewRef}>
            {children}
            <button onClick={onClose} className='btn close-btn'>&#10006;</button>
        </div>
    </div>
  )
}
