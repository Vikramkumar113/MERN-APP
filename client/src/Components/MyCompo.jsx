import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyCompo = () => {
  const navigate = useNavigate()

  const handleButton = ()=>{
      navigate("/")
  }
  return (
    <div className='flex flex-col space-y-3'>
      <p>Welcome</p>
      <button className='bg-green-500 px-5 py-2' onClick={handleButton}>Logout</button>
    </div>
  )
}

export default MyCompo
