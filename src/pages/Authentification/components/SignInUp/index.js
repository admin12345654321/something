import React from 'react'
import './SignInUp.scss'

const SignInUp = ({ isSignedUp }) => (
  <form className='form'>
    <input
      type='text'
      placeholder='Name/Email'
      name='name'
      className='input-item'
    />
    <input
      type='password'
      placeholder='Password'
      name='password'
      className='input-item'
    />
    {!isSignedUp && (
      <input
        type='password'
        placeholder='Repeat password'
        name='repeatPass'
        className='input-item'
      />
    )}
    <button type='button' className='input-btn'>
      {(isSignedUp && 'Sign In') || 'Sign Up'}
    </button>
  </form>
)

export default SignInUp
