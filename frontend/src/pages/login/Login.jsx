import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md border-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp </span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className='w-full input input-bordered h-10 bg-black text-gray-300'></input>
          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className='w-full input input-bordered h-10 bg-black text-gray-300'></input>
          </div>
          <Link to={"/signup"} className = 'text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300'>{"Don't"} have an account? </Link> 
          <div>
            <button className = 'btn btn-block btn-sm mt-2 border border-slate-900 bg-black text-gray-300'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login