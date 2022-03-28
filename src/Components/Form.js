import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpFormSuccess from './SignUpFormSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    }
  return (
    <div>
        {!formIsSubmitted ? <LoginForm submitForm={submitForm} /> : <SignUpFormSuccess />}
    </div>
  )
}

export default Form