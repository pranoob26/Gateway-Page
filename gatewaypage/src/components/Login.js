import React, { useState } from "react";
import { email } from "../context/tabcontext";
import { useContext } from "react";
import { app } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

function Login(props) {
  const { Email, setEmail } = useContext(email);
  const [password, setPassword] = useState("");
  const signin = () => {
    signInWithEmailAndPassword(auth, Email, password)
      .then(() => {
        alert("You are logged in !!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signup = () => {
    createUserWithEmailAndPassword(auth, Email, password)
      .then(() => {
        alert("Successfully Signed Up");
      })
      .catch((err) => {
        console.log(err);
      });
    const collectionref = collection(db, "users");
    addDoc(collectionref, {
      Email: Email,
      Password: password,
    }).then(() => {
      alert("Added the Document");
    });
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="credentials">
        <input
          className="inputcred"
          type="email"
          placeholder="Email"
          required
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="inputcred"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        {props.heading === "Login" ? (
          <button className="btn-sl" onClick={signin}>
            Login
          </button>
        ) : (
          <button className="btn-sl" onClick={signup}>
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
