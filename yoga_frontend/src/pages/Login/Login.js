import React, {useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useLogin from '../../customHooks/useLogin'
import './login.css'



const Login = () => {
    const [username , setUsername] = useState("") ;
    const [password , setPassword] = useState("") ;
    const navigate = useNavigate()
    const {login, isError, isLoading , isSuccess} = useLogin()
    const handleSubmit = ()=>{
        const body = {
          username,
          password
        }

        login(body,{
          onError: data=>console.log('error occured'),
          // onSuccess: ()=>navigate("/")
        })
    }

  return (
    <section className="login-form">
      <form className="form" onSubmit={(e)=>{
        e.preventDefault();
        e.stopPropagation();
        alert("sdf")
      }}>
        <div className="form-title">
          <h1>Yoga Classes</h1>
        </div>
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-input" 
            onChange={(e)=> setUsername(e.target.value)}
            value  = {username} 
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-input"
            onChange = {(e)=> setPassword(e.target.value)}
            value  = {password} 
          />
        </div>
        <button className="btn form-btn" onClick={handleSubmit} disabled={isLoading}>Submit</button>
        <p className="form-para">
          Not a member yet?
          <Link className="register-link" to = '/register'>Register</Link>
        </p>
         {/* {data.error && <FormError message={data.error}/>} */}
         {/* {loggedIn  && <FormSuccess message='Login successful!'/>} */}

      </form>
    </section>
  )
}

export default Login
