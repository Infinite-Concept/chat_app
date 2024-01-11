import React, { useState } from 'react'

function Register() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
      <form action="" method="post" className='w-64 mx-auto'>
        
        <input type="text" placeholder='Enter your username' className='block w-full rounded-sm p-2 mb-2' value={username} onChange={(e) => setUsername(e.target.value)} />

        <input type="password" placeholder='Enter your password' className='block w-full rounded-sm p-2 mb-2' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>Register</button>
      </form>
    </div>
  )
}

export default Register
