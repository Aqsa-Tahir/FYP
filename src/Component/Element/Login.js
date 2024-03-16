import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useHistory } from 'react-router-dom';


const Login = () => {
 // const history = useHistory(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform basic validation
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle login logic here
      console.log('Form data submitted:', formData);
      toast.success('Login successful!');
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
    //history.push('/');
  };

  return (
    <div className='bg-cover bg-center h-screen ' style={{ backgroundImage: "url('./Assets/3.jpg')" }} >
    <div className="min-h-screen flex items-center justify-center  " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <form className="bg-gray-200 p-8 shadow-md rounded-lg " onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded-2xl hover:bg-pink-600"
        >
          Login
        </button>
        <a href='/register' className='flex justify-center items-center text-md font-semibold hover:text-pink-600'>Register...</a>
      </form><ToastContainer />
    </div>
    </div>
  );
};

export default Login;
