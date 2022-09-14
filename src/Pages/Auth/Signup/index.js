import React , {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import styled from 'styled-components'

// const form = styled.section`
// color:green;` 

const Usersignup = () => {
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    // const {values} = useState('')
    const navigate  = useNavigate(); 

  //   useEffect(() => {
  //   let errors = {};
  //   if (!values.email) {
  //     errors.email = 'Email address is required';
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = 'Email address is invalid';
  //   }    
  // },);
// const Signup = () => {

//     console.log(username , email , password)

//     axios.post(
//       {
//         url : "http://localhost:5001/api/user/singup" , 
//         method : "post" ,
//         data : {
//         username : username ,
//         email: email ,
//         password : password
//       }
//       })
  
//   .then(result => {
//     console.log(result)     
//     navigate("/login") 
//   })
//   .catch(function (error) {
//     console.log(error);
// })
// }
const Signup = () => {

  console.log(username , email , password)

  axios.post("http://localhost:5001/api/user/singup" , 
  {
      username : username ,
      email: email ,
      password : password
      
  })
.then(result => {
  console.log(result)     
  navigate("/login") 
})
.catch(function (error) {
       console.log(error);
})
}
  return (
 
    <div>
      <section className="vh-100 bg-image" 
      style={{backgroundImage: 'url(/Assets/Images/Backgroundimage.jpeg)'}}>
    
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" />
            <div className="card-body p-5">
              <h1 className="text-uppercase text-center text-white mb-5">Sample Split</h1>
              <form 
              className='rounded p-4 p-sm-3'>
                <div className="form-outline mb-4">
                  <input type="text" 
                  onChange={(e)=>setUsername(e.target.value)}
                  className="form-control form-control-lg" placeholder='Your Name'              
                  />
                </div>
                <div className="form-outline mb-4">
                  <input type="email" 
                onChange={(e)=>setEmail(e.target.value)}
                  className="form-control form-control-lg" placeholder='Your Email'/>
                </div>
                <div className="form-outline mb-4">
                  <input type="password"  
                   onChange={(e)=>setPassword(e.target.value)}
                   className="form-control form-control-lg" placeholder='Password'/>
                </div>
                {/* <p className="text-center text-muted mt-5 mb-0"
                style={{margin:100}}>Have already an account? <Link to="/login"
                    className="fw-bold text-dark"><u>Login here</u></Link ></p>               */}
                <p class="sign-up text-center">Have already an account?<Link to="/login">Login here </Link></p>
                
                <div className="d-flex justify-content-center">
                  <button type="button"
                  onClick={Signup}
                    className="btn btn-dark btn-block btn-lg gradient-custom-4 text-white"
                    style={{marginTop:20}}>SignUp</button>
                </div>              
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>      
</section>
</div>
  )
}

export default Usersignup
