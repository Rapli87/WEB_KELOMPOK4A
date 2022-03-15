import React from "react";

// styling
import "../App.css";

const SignIn = () => {
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
          Email:
          <br />
          <input type={"email"} />
        </label>
        <label>
          Password:
          <br />
          <input type={"password"} />
        </label>
        <br />
        <button>Sign In!</button>
      </form>
    </div>
  );
};

export default SignIn;
