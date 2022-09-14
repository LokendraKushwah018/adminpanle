import React , {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link , useNavigate} from 'react-router-dom'


const Login = () => {
 
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate  = useNavigate(); 
 
const Userlogin= () => {

    console.log( email , password)
    axios.post("http://localhost:5001/api/user/login" , {
       
        email: email ,
        password : password
    })
  .then(result => {
    console.log(result)
    navigate("/Dashboard")
  })  
}
  return (

<div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
              <h3 className="card-title text-left mb-3 text-dark text-center">Login</h3>
              <form >
                  <div className="form-group">
                    <label>Username or email *</label>
                    <input type="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control p_input"/>
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input type="password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    className="form-control p_input"/>
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                  </div>
                  <div className="text-center">
                    <button type="submit" 
                    onClick={Userlogin}
                    className="btn btn-primary btn-block enter-btn">Login</button>
                  </div>                 
                  <p className="sign-up">Don't have an Account?<Link to="/"> Sign Up</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>     
      </div>   
    </div>
  )
}

export default Login
