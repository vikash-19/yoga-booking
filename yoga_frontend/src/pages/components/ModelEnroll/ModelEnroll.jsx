import axios from 'axios'
import React, { useState } from 'react'
import { isError, useMutation } from 'react-query'
import styles from './ModelEnroll.module.scss'

const ModelEnroll = ({setModal}) => {
    const [batch ,setBatch] = useState("7AM-8AM")
    const {mutate } = useMutation((body)=>{
       return axios.post("/subscribe", body, {withCredentials: true})
    })

    function handleSubmit(){
        const body = {
            batch
        }
        mutate(body,{
            onError: console.log("error"),
            onSuccess: setModal(false)
        })

    }

  return (
    <div className={styles.ModelEnrollBox}>
        
        <div className={styles.ModelEnrollImageBox}>
            <img className={styles.ModelEnrollImage} src={require('./EnrollImage.jpg')} alt="img"/>
        </div>
        
        <div className={styles.ModelEnrollMonth}>
            <span className={styles.ModelEnrollMonthName}>Month : </span>
            <span className={styles.ModelEnrollMonthValue}>{new Date().toLocaleString('default' , {month:'long'})}</span>
        </div>
        
        <div className={styles.ModelEnrollChooseBatchBox}>
            <span className={styles.ModelEnrollChooseBatch}>Batch &nbsp;: </span>
            <select name="batch" id="batch" onChange= {e=>setBatch(e.target.value)} value = {batch}>
                <option value="7AM-8AM">7AM-8AM</option>
                <option value="8AM-9AM">8AM-9AM</option>
                <option value="9AM-10AM">9AM-10AM</option>
                <option value="5PM-6PM">5PM-6PM</option>
            </select>
        </div>
        
        <div className={styles.ModelEnrollCheckBox}>
            <input type="checkbox" id="ModelEnrollCheckBoxId" name="checkBox" value="" />
            <label for="ModelEnrollCheckBoxId"> I agree with the Terms & Conditions.</label>
        </div>

        <div className={styles.ModelEnrollButtonBox}>
            <button type='button' className={styles.ModelEnrollButton}
            onClick={handleSubmit}
            >Enroll</button>
        </div>


    </div>
  )
}

export default ModelEnroll
