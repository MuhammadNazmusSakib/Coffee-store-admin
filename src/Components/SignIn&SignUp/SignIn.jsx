import React, { useContext } from 'react'
import { Contex } from '../DataProvider/Contex'

const SignIn = () => {

  const { signInUser } = useContext(Contex)
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const logInInfo = { email, password }
    console.log(logInInfo)

    signInUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })

  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

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

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600 text-center">
            Want to have an account?{" "}
            <a href="/signUp" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn