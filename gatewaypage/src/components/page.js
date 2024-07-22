import React from "react";
import { useContext } from "react";
import { tab } from "../context/tabcontext";
import Login from "./Login";
import Signup from "./Signup";
function Page() {
  const { Tab, setTab } = useContext(tab);
  const logintab = (e) => {
    setTab(1);
    console.log(Tab);
    // e.target.style.color = "blue";
  };
  const signuptab = (e) => {
    setTab(0);
    console.log(Tab);
  };
  return (
    <div className="div">
      <div className="btn-div">
        {/* {tab === 1 ? (
          <button
            className="Button"
            onClick={logintab}
            style={{ border: "2px", borderColor: "blue", border }}
          >
            Login
          </button>
        ) : ( */}
        <button className="Button" onClick={logintab}>
          Login
        </button>
        {/* )} */}
        <button className="Button" onClick={signuptab} ref={Signup}>
          Signup
        </button>
      </div>
      <div>
        {Tab === 1 ? <Login heading="Login" /> : <Login heading="Sign Up" />}
      </div>
    </div>
  );
}

export default Page;
