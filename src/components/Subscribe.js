import React, { useState, useRef } from 'react'
import { validate, res } from 'react-email-validator'

const Subscribe = () => {
  const [validity, setValidity] = useState("")
  const emailRef = useRef()

  // Validate email
  const validateEmail = (e) =>{
    e.preventDefault()

    const email = emailRef.current.value
    validate(email);

    if(!res){
      setValidity("invalid")
      console.log(email);
    }else{
      setValidity("valid")

      setTimeout(function(){
        setValidity("")
      }, 1000)

      emailRef.current.value = null
    }
  }  

  return (
    <div className="subscribe">
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <form onSubmit={validateEmail}>
            <input type="text" name="" id="" placeholder="Enter your email address" ref={emailRef} />
            <button type="submit">Contact Us</button>
            {validity === "invalid" && <div className='invalid'><p>Whoops, make sure it's an email</p></div>}
            {validity === "valid" && <div className='valid'><p>Submitted</p></div>}
        </form>
    </div>
  )
}

export default Subscribe