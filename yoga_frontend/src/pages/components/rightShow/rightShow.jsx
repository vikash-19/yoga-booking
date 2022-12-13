import React, { useEffect } from 'react'
import EnrollmentPage from './components/Enrollment/Enrollment';
import EnrollmentDetails from './components/EnrollmentDetails/EnrollmentDetails';
import styles from './rightShow.module.scss'
function RightShow({setModal,currSubscription:subscription , payment,setEnrollrollState, ...rest}) {
  return (
    <div className={styles.RightShow}>
        {
            subscription ?
            <EnrollmentDetails subscription={subscription} payment={payment}/>
            : <EnrollmentPage setModal={setModal} {...rest} subscription={subscription} payment={payment} setEnrollrollState={setEnrollrollState}/>
        }
    </div>
  )
}

export default RightShow;
