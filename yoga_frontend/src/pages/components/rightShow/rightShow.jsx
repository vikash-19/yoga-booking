import React, { useEffect } from 'react'
import EnrollmentPage from './components/Enrollment/Enrollment';
import EnrollmentDetails from './components/EnrollmentDetails/EnrollmentDetails';
import styles from './rightShow.module.scss'
function RightShow({setModal}) {
    function isEnrolled(){
        return false;
    }
  return (
    <div className={styles.RightShow}>
        {
            isEnrolled() ?
            <EnrollmentDetails/>
            : <EnrollmentPage setModal={setModal}/>
        }
    </div>
  )
}

export default RightShow;
