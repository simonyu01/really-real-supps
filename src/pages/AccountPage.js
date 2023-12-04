import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function AccountPage() {
  const [loggedIn, setLoggedIn] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setLoggedIn(true);
        window.localStorage.setItem("auth", "true");
      } else {
        setLoggedIn(false);
        window.localStorage.setItem("auth", "false");
        window.location.assign("/account/login");
      }
    });
  }, [auth]);

  const logOut = (e) => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        window.localStorage.setItem("auth", "false");
        setLoggedIn(false);
        window.location.assign("/account/login");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  if (loggedIn) {
    return (
      <div className="auth">
        <div className="account">
          <h1 className="account-title">Order History</h1>
          <div>
            <h2 className="section-text">Nothing</h2>
          </div>
        </div>
        <button onClick={logOut} className="logout-button">
          Sign Out
        </button>
      </div>
    );
  } else {
    return <div className = "account" style={{ height: "100vh" }}>
      <h1 className="account-title">Loading ...</h1>
    </div>;
  }
}

export default AccountPage;
