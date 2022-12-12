import React from 'react'
import styles from './leftShow.module.scss'
function LeftShow() {
  return (
    <div className={styles.leftShow}>
       <span className={styles.Hi}>Hi,</span> &nbsp;
       <span className={styles.firstname}>Vikas</span>
       <blockquote cite='#' >
       “Yoga is a mirror to look at ourselves from within.“
       </blockquote>
    </div>
  )
}

export default LeftShow
