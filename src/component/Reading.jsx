import React from 'react'
import { useNavigate } from 'react-router-dom'



 const Reading = () => {
    const navigate = useNavigate();

  return (
    <div className=' w-full h-screen flex justify-center items-center bg-black'>
      <h1 className='    text-white  text-5xl'>
        Reading
      </h1>

      <button onClick={()=>navigate(-1)}> go back </button>
    </div>
  )
}

export default Reading
