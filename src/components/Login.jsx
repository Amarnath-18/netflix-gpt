import React, { useState } from 'react'
import Header from './Header'
import { netflixBg } from '../Utils/Constrains'
const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(1);


  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };



  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='' src={netflixBg} alt="" />
      </div>
      <form className='p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-2xl ' action="">
      
        <h1 className=' text-2xl font-bold p-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        { !isSignInForm && <input type='text' placeholder='Enter your name ' className='my-4 p-3 w-full bg-gray-700 rounded-lg' />}
        <input type="email" placeholder='Email Address' className='my-4 p-3 w-full bg-gray-700 rounded-lg' />
        <input type="password" placeholder='Password' className=' my-4 p-3 w-full bg-gray-700 rounded-lg' />
        <button className=' my-4 p-3 border bg-red-600 font-semibold text-center w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='hover:cursor-pointer ' onClick={toggleSignInForm}> { !isSignInForm? "Already Have Account ? Sign In now" : "New to Netflix? SignUp now"}</p>
      </form>
    </div>
  )
}

export default Login
