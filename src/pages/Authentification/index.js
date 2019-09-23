import React, { useState } from 'react'
import classes from 'classnames'
import './Authentification.scss'

import SignInUp from './components/SignInUp'
import Layout from '../../components/Layout'

const Authentification = () => {
  const [isSignedUp, setIsSignedUpMode] = useState(true)

  const onSetSignUpComponent = () => setIsSignedUpMode(false)

  const onSetSignInComponent = () => setIsSignedUpMode(true)

  return (
    <Layout>
      <div className='auth_btns'>
        <button
          className={classes('btn', { active: isSignedUp })}
          onClick={onSetSignInComponent}
        >
          Sign In
        </button>
        <button
          className={classes('btn', { active: !isSignedUp })}
          onClick={onSetSignUpComponent}
        >
          Sign Up
        </button>
      </div>
      <div className='form-control'>
        <SignInUp isSignedUp={isSignedUp} />
      </div>
    </Layout>
  )
}

export default Authentification
