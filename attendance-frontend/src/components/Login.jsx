// import React, { useState } from 'react'
// import './style.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const Login = () => {

//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     })
//     const [error, setError] = useState(null)

//     const navigate = useNavigate()
//     axios.defaults.withCredentials = true;
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         axios.post('http://localhost:3000/auth/adminlogin', values)
//         .then(result => {
//             console.log(result)
//             if(result.data.loginStatus) {
//                 localStorage.setItem("valid", true)
//                 navigate('/dashboard')
//             } else {
//                 setError(result.data.Error)
//             }
//         })
//         .catch(err => console.log(err))
//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//         <div className='p-3 rounded w-25 border loginForm'>
//         <div className='text-warning'>
//                 {error && error}
//             </div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor="email"><strong>Email:</strong></label>
//                     <input type="email" name='email' autoComplete='off' placeholder='Enter Email' 
//                     onChange={(e) => setValues({...values, email : e.target.value})}className='form-control rounded-0'/>
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="password"><strong>Password:</strong></label>
//                     <input type="password" name='password' placeholder='Enter Password' 
//                     onChange={(e) => setValues({...values, password : e.target.value})}className='form-control rounded-0'/>
//                 </div>
//                 <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
//                 <div className='mb-1'>
//                     <input type='checkbox' name='tick' id='tick' className='me-2'/>
//                     <label htmlFor="password">Remeber Me</label>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        console.log(result);
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true);
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h2>LOGIN</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Email</label>
            <div className="inputField">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter Email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <span className="icon">📧</span>
            </div>
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <div className="inputField">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <span className="icon">🔒</span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>
          
          <button className="b1" type="submit">LOGIN</button>
        
        </form>
       </div>
   </div>
  );
};

export default Login;