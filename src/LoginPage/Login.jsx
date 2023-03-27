import React from 'react'
import './login.css'
import {Button,Row,Col,Container,Form,FormGroup} from 'react-bootstrap' 
import loginImg from '../asset/login.png'
import userIcon from '../asset/user.png'
import {Link} from 'react-router-dom'



function Login() {
  return (
    
    <section>
    <Container>
       
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login__container d-flex justify-content-between'>

           <div className='login__img'>
            <img src={loginImg} alt=''></img>

           </div>

           <div className='login__form'>
            <div className='user'>
              <img  src={userIcon} alt=""></img>
               </div>
               <h2>Login</h2>

               <Form >
                <FormGroup>
                  <input type='text' placeholder='Email' required id='email' ></input>
                </FormGroup>
                <FormGroup>
                  <input type='password' placeholder='Password' required id='password' ></input>
                </FormGroup>

                <Button className='btn btn-dark' type='submit'>Login</Button>
               </Form>
               <p>Don't have an account yet ? <a style={{color:"black",cursor:"pointer"}} >Register</a></p>
           </div>

          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Login