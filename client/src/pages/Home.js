import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [testData, setTestData] = useState(null)
  useEffect(()=>{
        getData()
  },[])

  const getData = async()=>{
    try{
    let res = await axios.get(`/api/api_test`)
    setTestData(res.data.dataHere)
    } catch(err){
      alert('err')
    }

  }
  return (
    <div>
      <h1>Title goes here </h1>
      {testData}
    </div>
  )
}

export default Home