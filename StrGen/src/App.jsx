import React from 'react'
import {useState} from 'react'

const App = () => {

  const [length, setLength]=useState("")
  const[password, setPassword]=useState("")
  
  const generatePassword=()=>{
    const chars="1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/?/+-"
    let pass=""

    for(let i=1;i<=Number(length);i++){
      const index=Math.floor(Math.random()*chars.length)
      pass+=chars[index]
    }
    return pass
  }

  const handleClick=(e)=>{
    e.preventDefault()

    return setPassword(generatePassword())
  }
 
  return (
    <div className='bg-amber-800 h-screen w-screen flex items-center justify-center'>
      <div className='w-[600px] h-60 bg-amber-500 rounded-md flex items-center justify-center flex-col gap-y-6'>
        <h3 className='text-xl font-bold text-amber-950'>RANDOM PASSWORD GENERATOR</h3>
        <div className='flex items-center justify-center gap-x-5'>
          <input type="number" placeholder='Enter a positive number length' className='h-7 w-70 bg-amber-50 rounded-md text-center' onChange={(e)=>{setLength(e.target.value)}} />
          <button className='bg-blue-500 text-white px-2 py-1 rounded-md' onClick={handleClick}>Generate</button>
        </div>
        <input type="text" placeholder='Generated password shows here' className='h-7 w-98 rounded-md outline-none text-center bg-amber-50' value={password} readOnly />
      </div>

    </div>
  )
}

export default App
