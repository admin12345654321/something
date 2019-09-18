import React, { useState } from "react";
import "../../styles/Authentification.scss";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentification = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const currentComponent = () => {
    switch (activeComponent) {
      case 1:
        return <SignIn />;
      case 2:
        return <SignUp />;
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
      {currentComponent()}
    </section>
  );
};

export default Authentification;
