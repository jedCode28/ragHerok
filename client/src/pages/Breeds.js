import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { List, Header, Table, Card, CardHeader, Accordion, Label } from 'semantic-ui-react';

const Breeds = () => {
  const [dogs, setDogs] = useState([])
  const [activeIndex, setActiveIndex] = useState({})

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    activeIndex === index?
    setActiveIndex( null ):
    setActiveIndex( index )
  }

  useEffect(() => {
    getDogs()
  } ,[])

  const getDogs = async () => {
    try {
      let res = await axios.get("/api/dogs");
      setDogs(res.data);
    } catch (error) {
      alert("error");
      console.log(error);
    }
    console.log(dogs)
  };


  const uniqueData = (array) => {
    let uniqueArray = []
    array.forEach((item) => {
      if (uniqueArray.includes(item.breed)){
        console.log('dup')
      }else{
        uniqueArray.push(item.breed)
      }
    })

    return uniqueArray
    
  }

  const renderDogs = (dogs) => {
    return(
    dogs.map((dog) => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>{dog.dog_name}</Card.Header>
            <Card.Meta>Breed: {dog.breed} </Card.Meta>
            <Card.Meta>Price: {dog.price} </Card.Meta>
            <Card.Description>{dog.description}</Card.Description>
          </Card.Content>
        </Card>
      )
    })
    )
  }

  const renderBreeds = (dogs) => {
    let breeds = uniqueData(dogs)
    return(
      breeds.map((breed, i) => {
        return(
          <Accordion>
            <Accordion.Title
            active={activeIndex === i}
            index={i}
            onClick={handleClick}
            >

            <div>
                <Label>
                  {breed}
                </Label>
              </div>

            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <Card.Group>
              {renderDogs((dogs.filter(dog => dog.breed == breed)))}
              </Card.Group>
            </Accordion.Content>
          </Accordion>
        )
      })
    )
  }


  return (
    <div>
      {renderBreeds(dogs)}
    </div>
  )
}

export default Breeds

