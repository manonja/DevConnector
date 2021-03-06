import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const onChange = (e) => 
    setFormData({...formData, [e.target.name]: [e.target.value]}) 
  
    const onSubmit = (e) => {
      e.preventDefault()
       console.log('success')
      
    }

  return (
    <Fragment>
       <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Login to your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              name="email" 
              onChange={e => onChange(e)}
            />
            <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <input 
            type="submit" 
            className="btn btn-primary" 
            value="Register" 
          />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/register">Sign Up</Link>
        </p>
    </Fragment>
  )
}

export default Login
