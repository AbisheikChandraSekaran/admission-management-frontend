// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import "./Login.css"
// import { useDispatch } from 'react-redux';
// import { setToken } from '../redux/userSlice';


// const Login = () => {

//   const dispatch = useDispatch();
//   const [email, setEmail] =useState("");
//   const [password, setPassword] =useState("");

//   const handleEmailChange = (e) =>{
//     setEmail(e.target.value);
//   };
  
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
  

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false); // Track success state
//   const navigate = useNavigate(); // Initialize the navigate function

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       email,
//       password,
//     }


//     try {
//       const res = await axios.post('http://localhost:3000/login', payload);
//       setSuccess(true); // Set success state to true on successful login
//       setError('');
//       toast.success(res.data.message)
//       console.log(res)
//       localStorage.setItem("token",res.data.token);
//       console.log(res.data.token)
//       dispatch(setToken(res.data.token))
//       console.log('dispatch')
//       navigate('/'); 

//     } catch (err) {
//       console.log(err)
//       setError(err.response?.data?.error || 'Invalid email or password');
//       setSuccess(false); // Ensure success is false if an error occurs
//       toast.error(err.response?.data?.error)
      
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">Login successful!</p>}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Login.css"
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const res = await axios.post('http://localhost:3000/login', payload);
      setSuccess(true);
      setError('');
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      dispatch(setToken(res.data.token));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid email or password');
      setSuccess(false);
      toast.error(err.response?.data?.error);
    }
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className="btn" type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Login successful!</p>}
      </form>
      <div className="register-link">
        <p>Don't have an account? <a href="/signup">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
