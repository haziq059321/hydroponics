import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = "https://fypapi.vercel.app/api/data/getData";


const Reading = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setData(data);
      }
      console.log(data);
    } catch (e) {
      console.log(e);

    }
  }


  useEffect(() => {
    fetchData(API);
  })
  const navigate = useNavigate();

  return (
    <div className=' w-full h-screen flex justify-center items-center bg-black'>
      <h1 className='    text-white  text-5xl'>
        Reading
      </h1>
      <table>
        <thead>
          <th>ID</th>
          <th>DEVICE ID</th>
          <th>TYPE</th>
          <th>VALUE</th>
          <th>CREATED</th>
        </thead>\
        <tbody>
          <UseData api={data} />
        </tbody>
      </table>

      <button onClick={() => navigate(-1)}> go back </button>
    </div>
  )
}

export default Reading
