import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center space-y-2'>
        <input className='bg-white p-2' type='text' placeholder='username' />
        <input className='bg-white p-2' type='password' placeholder='password' />
        <button className='px-3 py-2 bg-orange-800 text-white' onClick={() => {navigate('/storage')}}>Login</button>

    </div>
  )
}

export default SignIn