import React, { Fragment } from "react"
import "./SignInUp.scss"

const SignIn = ({ isSignedUp }) => {
  return (
    <Fragment>
      <form className='form'>
        <input
          type='email'
          placeholder='Email'
          name='name'
          className='input-item'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='input-item'
        />
        {isSignedUp && (
          <input
            type='password'
            placeholder='Repeat password'
            name='repeatPass'
            className='input-item'
          />
        )}
        <button type='button' className='input-btn'>
          {(isSignedUp && "Sign Up") || "Sign In"}
        </button>
      </form>
    </Fragment>
  )
}

export default SignIn
