import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header'
import styles from './Home.module.scss'
import LeftShow from '../components/leftShow/leftShow'
import RightShow from '../components/rightShow/rightShow'
import Modal from '../../components/Modal'
const isLoggedIn = ()=>{
    return false ;
}

const Home = () => {
    const navigate = useNavigate()  ;
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [enrollState , setEnrollrollState] = useState("overAge")
    useEffect(()=>{
        if(!isLoggedIn()){
            navigate("/login") ;
        }
    })

    function renderModal(){
        if(!enrollState)
            return null
        if(enrollState==="overAge"){
            return (
                <div>You are over Age</div>
            )
        } else if(enrollState==="underAge"){
            return (
            <div>
                You are underAge
            </div>
            )
        } else if(enrollState === "duePayment"){
            return (
                <div>Payment Due</div>
            )
        } else if(enrollState === "enroll"){
            return <div>Ready to enroll</div>
        } else return null
    }
    return (
        <React.Fragment>
        <div className = {styles.home}>
            <Header />
            <main className={styles.main}>
                <div className={styles.show}>
                    <LeftShow/>
                    <div></div>
                    <RightShow modal={isModalOpen} setModal={setIsModalOpen}/>
                </div>
            </main>
        </div>
        <Modal modal={
            isModalOpen} 
            setModal={setIsModalOpen}
            title={'vikas'}
            >
        {
            renderModal()
        }

        </Modal>
        </React.Fragment>
    )
}

export default Home
