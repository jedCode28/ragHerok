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
    <header as='h1' textAlign='center'>Login in/ register</header>
    </div>
  )
}

export default Home