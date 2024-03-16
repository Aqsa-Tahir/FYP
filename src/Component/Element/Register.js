import React, { useState } from 'react';
import firebase from "../Element/Firebase";
import { app, auth } from '../Element/Firebase'; 



const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform basic validation
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle registration logic here
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration error:', errorMessage);
      });
  } else {
    // Set validation errors
    setErrors(validationErrors);
  }
};
  

  return (
    <div className='bg-cover bg-center h-screen ' style={{ backgroundImage: "url('./Assets/3.jpg')" }} >
    <div className="min-h-screen flex items-center justify-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <form className="bg-gray-200 p-8 shadow-md rounded-lg px-20" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6">Registration</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.username && <div className="text-red-500 text-sm mt-1">{errors.username}</div>}
        </div>

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

        <div className="mb-4">
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

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded-2xl hover:bg-pink-900"
        >
          Register
        </button>
        <a href='/login'  className="flex justify-center items-center text-md font-semibold hover:text-pink-600 ">Already have an account? Login...</a>
      </form>
    </div>
    </div>
  );
};

export default Registration;
