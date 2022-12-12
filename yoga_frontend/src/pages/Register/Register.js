import React, {useState , useRef} from 'react'
import './register.css'

const Register = () => {
  const [username , setUsername] = useState("") ;
  const [password , setPassword] = useState("") ;
  const [dob , setDob] = useState("") ;
  const [firstName , setFirstName] = useState("") ;
  const [lastName , setLastName] = useState("") ;

  return (
    <section className="login-form">
      <form className="form">
        <div className="form-title">
          <h1>Yoga Classes</h1>
        </div>
        <h3>Register</h3>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-input"
            onChange={(e)=>{setUsername(e.target.value)}}
            value = {username}
          />
        </div>
        <div className="form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-input"
            onChange={(e)=>{setFirstName(e.target.value)}}
            value = {firstName}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-input"
            onChange = {(e)=> setLastName(e.target.value)}
            value = {lastName}
          />
        </div>

        <div className="form-row">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="form-input"
            onChange = {(e)=> setDob(e.target.value)}
            value = {dob}
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-input"
            onChange = {(e)=> setPassword(e.target.value)}
            value = {password}
          />
        </div>

        <div className="form-row">
          <button className="btn form-btn register-btn" >
            Submit
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default Register
