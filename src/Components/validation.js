import React from 'react'

const validation = (values) => {

let errors = {};

if(!values.fullname){
    errors.fullname="Name is required."
}
else if(values.fullname.length > 15){
    errors.password="Name can't exceed more than 15 characters"
}
if(!values.email){
    errors.email="Email is required."
}
 else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email is invalid"
}
if(!values.password){
    errors.password = "Password is required"
}
else if(values.password.length < 5){
    errors.password="Password must be more than 5 characters"
}

  return errors;
}

export default validation