import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
        getData()
  },[])

  const getData = async()=>{
    try{
    let res = await axios.get(`/api/api_test`)
    setTestData(res.data.dataHere)
    setLoading(false)
    } catch(err){
      alert('err')
      setLoading(false)
    }

  }
  if(loading) return <p>loading</p>
  return (
    <div>
      <h1>Title goes here </h1>
    </div>
  )
}

export default Home