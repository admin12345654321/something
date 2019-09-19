import React, { useState } from "react";
import "./Authentification.scss";

import SignInUp from "../../components/SignInUp";
import Layout from "../../components/Layout";

const Authentification = () => {
  const [isSignedUp, setIsSignedUpMode] = useState(true);

  const onSetActiveComponent = () => setIsSignedUpMode(!isSignedUp);

  return (
    <Layout>
      <div className="auth__btns">
        <button className="btn active" onClick={onSetActiveComponent}>
          Sign In
        </button>
        <button className="btn" onClick={onSetActiveComponent}>
          Sign Up
        </button>
      </div>
      <div className="form-control">
        <SignInUp isSignedUp={isSignedUp} />
      </div>
    </Layout>
  );
};

export default Authentification;
