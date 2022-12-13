import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header'
import styles from './Home.module.scss'
import LeftShow from '../components/leftShow/leftShow'
import RightShow from '../components/rightShow/rightShow'
import Modal from '../../components/Modal'
import ModalWarnings from '../components/ModalWarnings/ModalWarnings'
import ModelEnroll from '../components/ModelEnroll/ModelEnroll'
import {useHome} from '../../customHooks'

const Home = () => {
    const navigate = useNavigate()  ;
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [enrollState , setEnrollrollState] = useState("enroll")
    const {data,status,  isLoading , isSuccess} = useHome()
    
    function renderModal(){
        if(!enrollState)
            return null
        if(enrollState==="overAge"){
            return (
                <ModalWarnings messageTitle={"Not eligible to Enroll!\n"} messageDesc={" Your age is exceeding 65."}/>
            )
        } else if(enrollState==="underAge"){
            return (
                <ModalWarnings messageTitle={"Not eligible to Enroll!\n"} messageDesc={"Your age is Below 15."} />
            )
        } else if(enrollState === "duePayment"){
            return (
                <ModalWarnings messageTitle={"Not eligible to Enroll!\n"} messageDesc={"Your last payment is due."}/>
            )
        } else if(enrollState === "enroll"){
            return(
                <ModelEnroll setModal={setIsModalOpen}/>
            )
        } else return null
    }
    return (
        <React.Fragment>
        {!isLoading &&
            <div className = {styles.home}>
                <Header username = {data.username}/>
                <main className={styles.main}>
                    <div className={styles.show}>
                        <LeftShow/>
                        <div></div>
                        <RightShow modal={isModalOpen} setEnrollrollState={setEnrollrollState} setModal={setIsModalOpen} {...data} />
                    </div>
                </main>
            </div>
        }
        <Modal modal={
            isModalOpen} 
            setModal={setIsModalOpen}
            title={((enrollState==="enroll")?"Enroll":"Warning")}
            >
        {
            renderModal()
        }

        </Modal>
        </React.Fragment>
    )
}

export default Home
