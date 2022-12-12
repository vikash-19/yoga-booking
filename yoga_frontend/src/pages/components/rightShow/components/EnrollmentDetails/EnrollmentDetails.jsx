import React from 'react'
import styles from './EnrollmentDetails.module.scss'

function EnrollmentDetails() {

  function getMonth(){
    // return "fgojf";
    return new Date().toLocaleString('default' , {month:'long'}) ;
  }

  function getBatch(){
    return "7AM-8AM" ;
  }

  function isPaymentDue(){
    return true ;
  }

  return (
    <div className={styles.EnrollmentDetails}>
      <div className={styles.Text}>
      Welcome!
      </div>
      <div className={styles.Row}>
      Month : {getMonth()}
      </div>
      <div className={styles.Row}>
      Batch : {getBatch()}
      </div>

      <div className={styles.ButtonsWrapper}>
        {isPaymentDue()&&
          <button className = {`${styles.PayNow} ${styles.button}`}>
            Pay Now
          </button>
        }

        <button className={`${styles.ChangeBatch} ${styles.button}`}>
          Change batch
        </button>

      </div>

    </div>
  )
}

export default EnrollmentDetails
