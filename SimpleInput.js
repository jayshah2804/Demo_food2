import React, { useState } from "react";
import "../components/Hooks/SimpleInput.css";

const SimpleInput = (props) => {
  const [isClicked, setIsCLicked] = useState({ login: false, signup: false });
  const loginClickedHandler = () => {
    setIsCLicked({ login: true, signup: false });
    document.getElementById("dummy").className = "login_signupOverlay";

  }
  const signupClickedHandler = () => {
    setIsCLicked({ login: false, signup: true });
    document.getElementById("dummy").className = "login_signupOverlay";
  }

  const closeClickHandler = () => {
    setIsCLicked({ login: false, signup: false });
    document.getElementById("dummy").className = "asd";
  }
  const createAccountClickHandler = () => {
    setIsCLicked({ login: false, signup: true });
  }
  const loginintoAccountClickHandler = () => {
    setIsCLicked({ login: true, signup: false });
  }
  return (
    <React.Fragment>
      <button onClick={loginClickedHandler} className="buttons">Login</button>
      <button onClick={signupClickedHandler} className="buttons">Sign-up</button>
      <div id="dummy" className="asd">
        {(isClicked.login || isClicked.signup) &&
          <div>
            <button onClick={closeClickHandler} className="closeButton">X</button>
            {isClicked.login &&
              <React.Fragment>
                <h3>Login</h3>
                <h4 className="createAccount" onClick={createAccountClickHandler}>or create an account</h4>
                <input type="tel" placeholder="Enter your phone number"></input>
                <button>LogIn</button>
              </React.Fragment>
            }
            {isClicked.signup &&
              <React.Fragment>
                <h3>Signup</h3>
                <h4 className="createAccount" onClick={loginintoAccountClickHandler}>or Login to your account</h4>
                <input type="tel" placeholder="Enter your phone number"></input><br />
                <input type="text" placeholder="Enter your Name"></input><br />
                <input type="email" placeholder="Enter your Email"></input><br />
                <input type="password" placeholder="Enter your Password"></input><br />
                <button>Signup</button>
              </React.Fragment>
            }
            
          </div>
        }
      </div>
    </React.Fragment>
  );
};

export default SimpleInput;
