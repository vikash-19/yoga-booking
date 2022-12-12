import React from 'react'
import styles from './Enrollment.module.scss'
function Enrollment({setModal}) {
  function enroll(){

  }
  return (
    <div className={styles.Enrollment}>
        <span className={styles.text}>You haven't Enrolled into the class! </span>
        <button onClick={()=>{setModal(prev=>!prev)}} className={styles.button}>
            Enroll Now
        </button>
    </div>
  )
}

export default Enrollment
