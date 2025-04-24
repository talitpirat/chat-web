import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { useState } from 'react'

function SignUp() {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const {loading,signup} =useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md border-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-500'> ChatApp </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full Name" className='w-full input input-bordered h-10 bg-black text-gray-300' value={inputs.fullName} 
            onChange={(e) => setInputs({...inputs,fullName:e.target.value})} 
            />
          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className='w-full input input-bordered h-10 bg-black text-gray-300'
            value={inputs.username} 
            onChange={(e) => setInputs({...inputs,username:e.target.value})} />
          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className='w-full input input-bordered h-10 bg-black text-gray-300'
            value={inputs.password} 
            onChange={(e) => setInputs({...inputs,password:e.target.value})} 
            />
          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text text-gray-300'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className='w-full input input-bordered h-10 bg-black text-gray-300'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            </label>
          </div>
          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 inline-block text-gray-300' >Already have an account?</Link>
          <div>
            <button className = 'btn btn-block btn-sm mt-2 border border-slate-900 bg-black text-gray-300'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp