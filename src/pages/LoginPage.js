import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setLoggedIn(true);
        window.localStorage.setItem("auth", "true");
      }
      if (userCred) {
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }

      const storedAuth = window.localStorage.getItem("auth");
      if (storedAuth === "true") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        window.localStorage.setItem("auth", "false");
        setToken("");
      }
    });
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCred) => {
        if (userCred) {
          setLoggedIn(true);
          window.localStorage.setItem("auth", "true");
        }
        const user = userCred.user;
        console.log("new user: ", user);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  if (!loggedIn) {
    return (
      <div className="auth">
        <div className="auth-form">
          <h1 className="section-title auth-headline">Login</h1>
          <Form>
            <Form.Group className="form-group">
              <Form.Control
                type="input"
                placeholder="Enter Email"
                className="input-fields"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className="input-fields"
                value={pass}
                onChange={handlePassChange}
              />
            </Form.Group>
            <button className="submit-button" onClick={handleSubmit}>
              Login
            </button>
          </Form>
          <Link className = "auth-text" to= "/account/register" style={{margin: "1em 0 0 0"}}>Register</Link>
        </div>
      </div>
    );
  } else {
    window.location.assign("/account");
  }
}

export default LoginPage;
