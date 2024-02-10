import React from 'react'

const About = () => {
  return (  
       

     <div name ="about"  className='  w-full  h-screen   flex  flex-col justify-center items-center bg-gradient-to-b  
     from-green-300 via-green-200 to-blue-200  overflow-hidden'>



      <div className=' 
      
      
      '>

         <h3 className='capitalize  text-2xl font-bold  text-blue-900  border-b-4
         border-blue-400   my-4 md:text-4xl    '>about</h3>
      </div>

      <div className=' flex flex-col  justify-center   items-center px-6 py-2'>



        <div className=' lg:pt-8 p-4 justify-center items-center text-xl  md:text-xl  '>
          <p>Our project, the "SMART HYDROPONICS MANAGEMENT SYSTEM," is a pioneering solution that combines cutting-edge 
            technology with sustainable farming practices. </p>
        </div>

        <br />


        <div    className='lg:pt-8 p-4 justify-center items-center text-xl  md:text-xl'>
          <p>Going beyond observation, our system introduces automation, administering water based on plant needs, revolutionizing agricultural practices for increased efficiency and sustainability</p>
        </div>



      </div>



     </div>
  )
}

export default About
