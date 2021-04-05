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
    <h1>~Welcome To The Etsy Dog Trade~</h1>
    <h2>Shop Now!</h2>
    <div style={{display: 'flex'}}>
    <img src="https://static.simpsonswiki.com/images/thumb/4/4b/Wacky_Dog.png/393px-Wacky_Dog.png" />
    {/* <img src="https://i.stack.imgur.com/YK230.png" style={{height: '250px'}} /> */}
    <h2>P-Please Don't Leave Me Here</h2>
    </div>
    </div>
  )
}

export default Home