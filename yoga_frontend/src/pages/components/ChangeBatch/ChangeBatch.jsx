import axios from 'axios'
import React, {useState} from 'react'
import { useMutation } from 'react-query'
import styles from './ChangeBatch.module.scss'


const ChangeBatch = (props) => {
    const [checked ,setChecked] = useState(false)
    const [batch , setBatch] = useState(props.subscription.batch)
    const {mutate} = useMutation((body)=>{
        return axios.put(`/changeBatch/${props.subscription._id}`, body, {withCredentials:true})
    })


    function handleChangeBatch(){
        const body = {
            batch
        }

        mutate(body, {
            onError: ()=>console.log("sdfgunable to change the batch"),
            onSuccess: ()=>{props.setModal(false)} 
        })
    }
  return (
    <div className={styles.ModelEnrollBox}>
            
        <div className={styles.ModelEnrollImageBox}>
            <img className={styles.ModelEnrollImage} src={require('./chnageBatch.png')} alt="img"/>
        </div>
        
        <div className={styles.ModelEnrollMonth}>
            <span className={styles.ModelEnrollMonthName}>Month : </span>
            <span className={styles.ModelEnrollMonthValue}>{new Date().toLocaleString('default' , {month:'long'})}</span>
        </div>
        
        <div className={styles.ModelEnrollChooseBatchBox}>
            <span className={styles.ModelEnrollChooseBatch} >Batch &nbsp;: </span>
            <select name="batch" id="batch"
                onChange={(e)=>setBatch(e.target.value)}
                value = {batch}
            >
                <option value="7AM-8AM">7AM-8AM</option>
                <option value="8AM-9AM">8AM-9AM</option>
                <option value="9AM-10AM">9AM-10AM</option>
                <option value="5PM-6PM">5PM-6PM</option>
            </select>
        </div>
        
        <div className={styles.ModelEnrollCheckBox}>
            <input 
                type="checkbox" 
                id="ModelEnrollCheckBoxId" 
                name="checkBox" 
                checked={checked} 
                onChange={()=>setChecked(!checked)}
            />
            <label for="ModelEnrollCheckBoxId"> I Agree.</label>
        </div>

        <div className={styles.ModelEnrollButtonBox}>
            <button 
                type='button' 
                className={styles.ModelEnrollButton}
                onClick={handleChangeBatch}
                disabled={!checked} style={{background: (!checked)&&'gray'}}
            >
            Change Batch
            </button>
        </div>


    </div>
  )
}

export default ChangeBatch
