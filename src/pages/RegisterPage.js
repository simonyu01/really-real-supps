import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [submit, setSubmit] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);

      if (userCred) {
        setLoggedIn(true);
        window.localStorage.setItem("auth", "true");

        const user = userCred.user;

        if (user.email) {
          const response = await fetch("http://localhost:5000/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              uid: user.uid,
            }),
          });



          if (response.ok) {
            console.log("User document created in Firestore");
          } else {
            console.error(
              "Failed to create user document in Firestore:",
              response.statusText
            );
          }
        }
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  if (!loggedIn) {
    return (
      <div className="auth">
        <div className="auth-form">
          <h1 className="section-title auth-headline">Register</h1>
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
            <Form.Group className="form-group">
              <Form.Control
                type="password"
                placeholder="Re-enter Password"
                className="input-fields"
                value={confirmPass}
                onChange={handleConfirmPassChange}
              />
            </Form.Group>
            <button className="submit-button" onClick={handleSubmit}>
              Register
            </button>
          </Form>
          <Link
            className="auth-text"
            to="/account/login"
            style={{ margin: "1em 0 0 0" }}
          >
            Login
          </Link>
        </div>
      </div>
    );
  } else {
    window.location.assign("/account");
  }
}

export default RegisterPage;
