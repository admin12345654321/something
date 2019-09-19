import React, { useState } from "react"
import "./Authentification.scss"

import SignInUp from "../../components/SignInUp"
import Layout from "../../components/Layout"

const Authentification = () => {
  const [isSignedUp, setIsSignedUpMode] = useState(false)

  const onSetSignUpComponent = () => setIsSignedUpMode(true)

  const onSetSignInComponent = () => setIsSignedUpMode(false)

  return (
    <Layout>
      <div className='auth__btns'>
        <button className='btn active' onClick={onSetSignInComponent}>
          Sign In
        </button>
        <button className='btn' onClick={onSetSignUpComponent}>
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
