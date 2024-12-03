import React, { useContext, useState } from "react";
import { Contex } from "../DataProvider/Contex";

const SignUp = () => {

  const { createUser } = useContext(Contex)

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const formData = { name, email, password }

    console.log("Form Submitted: ", formData);
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const newUser = {name, email}
        // save new user info to database
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log('user created to db', data)
        })
      })
      .catch((error) => {
        console.log(error.code);
        // ..
      })
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          {/* Confirm Password */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div> */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/signIn" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
