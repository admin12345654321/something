import React, { useState } from "react";
import "../../styles/Authentification.scss";

import SignInUp from "./SignInUp";

const Authentification = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const currentComponent = () => {
    switch (activeComponent) {
      case 1:
        return <SignInUp repeatPass={false} txt="Sign In" />;
      case 2:
        return <SignInUp repeatPass={true} txt="Sign Up" />;
      default:
        break;
    }
  };

  return (
    <section className="auth">
      <div className="auth__btns">
        <button className="btn active" onClick={() => setActiveComponent(1)}>
          Sign In
        </button>
        <button className="btn" onClick={() => setActiveComponent(2)}>
          Sign Up
        </button>
      </div>
      <div className="form-control">{currentComponent()}</div>
    </section>
  );
};

export default Authentification;
