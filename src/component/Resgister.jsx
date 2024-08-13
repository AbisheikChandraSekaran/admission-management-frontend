// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import './Register.css';

// const Register = () => {
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   // });

  
//   const [name, setName] =useState("");
//   const [email, setEmail] =useState("");
//   const [password, setPassword] =useState("");

//   const handleNameChange =(e) =>{
//     setName(e.target.value);
//   }
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
//       name,
//       email,
//       password,
//     };

//     try {
//       const res = await axios.post('http://localhost:3000/signup', payload);
//       setSuccess(true); // Set success state to true on successful signup
//       setError('');
//       toast.success(res.data.message)
//     } catch (err) {
//       console.log(err);
//       setError(err.response?.data?.error || 'An error occurred during signup');
//       setSuccess(false); 
//       toast.error(err.response?.data?.error)
//     }
//   };

//   // Conditional rendering based on success
//   if (success) {
//     // Redirect to login after a short delay (optional)
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000); // Adjust the delay as needed
//     return <p>Signup successful! Redirecting to login...</p>;
//   }

//   return (
//     <div className="signup-container-main">
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//         </div>
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
//         <button type="submit">Sign Up</button>
//       </form>

//       {error && <p className="error-message">{error}</p>}
//     </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
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
    const payload = {
      name,
      email,
      password,
    };

    try {
      const res = await axios.post('http://localhost:3000/signup', payload);
      setSuccess(true);
      setError('');
      toast.success(res.data.message);

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during signup');
      setSuccess(false);
      toast.error(err.response?.data?.error);
    }
  };

  return (
    <div className="signup-container-main">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Signup successful! Redirecting to login...</p>}
        
        <div className="register-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

