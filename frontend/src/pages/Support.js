import React, { useState,useEffect } from 'react'
import APIService from '../ApiService'
import './support.css'
import {useCookies} from 'react-cookie'

function Support() {
  const [token,setToken,removeToken]=useCookies(['mytoken'])
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')
  const [user,setUser]=useState([])
  const getUser=()=>{
      
    APIService.ProfileView(token)
    .then(resp=>{
        setUser(resp)
        setName(resp.username)
        setEmail(resp.email)
    } 
        )
    .catch(error=>console.log(error))
   
  }
  const sendMessage=()=>{
    APIService.CreateCustomerQuery({name,email,subject,message})
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
}   
      useEffect(()=>{
      if(!token['mytoken']){
        
      }else{
        getUser()
      }
    

      },[token,user])
    return (
             <div class="support"> 
             
      <h1>Code Thamizha</h1> 
     
      <div class="social-links">
        <a href=""><i class="fab fa-facebook-f"></i></a>

        <a href="https://www.youtube.com/codethamizha/"><i class="fab fa-youtube"></i></a>
        <a href="https://github.com/Thasanthan-codethamizha"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/code_thamizha"><i class="fab fa-twitter"></i></a>
        <a href="https://discord.gg/5g4Zd4J"><i class="fab fa-discord"></i></a>
        <a href="https://www.linkedin.com/in/thasanthan-code-thamizha/"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +94723190180</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" onChange={e => setName(e.target.value)} value={name} type="text"
              required="required" data-validation-required-message="Please enter your name"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" onChange={e => setEmail(e.target.value)} value={email} type="email"
              required="required" data-validation-required-message="Please enter your email"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="SUBJECT" onChange={e => setSubject(e.target.value)} value={subject} type="text"
              required="required" data-validation-required-message="Please enter a subject"/>
            </div>
            <div class="app-form-group message">
              <textarea class="app-form-control" placeholder="MESSAGE" onChange={e => setMessage(e.target.value)} value={message} type="text"
              required="required" data-validation-required-message="Please enter your message"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" onClick={sendMessage} type="submit">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

    </div>
    )
}

export default Support
