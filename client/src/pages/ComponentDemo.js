import React from 'react'
import Button from '../components/Button'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import RegisterForm from '../components/RegisterForm'

const ComponentDemo = ()=>{
    return(
        <>
          <h1>My components</h1>
          <Button primary>Primary button</Button>
          <Button >Inverted Button</Button>
          <CardContainer>
              <FormattedMessage type='alert'>
                  Alert message
              </FormattedMessage>
              <FormattedMessage type='warn'>
                  Warn message
              </FormattedMessage>
              <FormattedMessage>
                  Notify message
              </FormattedMessage>
          </CardContainer>
          <CardContainer>
            <RegisterForm />
         </CardContainer>
          <CardContainer>
              <h1>Hello world</h1>
              <p>saint patty's day</p>
              <p></p>
          </CardContainer>
          <CardContainer>
              <h1>hello world</h1>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
              <p>asdhjfka dkfj alksdj flkaj sdlfkj a lk df</p>
          </CardContainer>


         </>
    )
}

export default ComponentDemo 