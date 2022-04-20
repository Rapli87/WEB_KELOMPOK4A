import React from "react";
import { Link } from 'react-router-dom'

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
          <input placeholder="Masukkan Email" type={"email"} />
        </label>
        <label>
          Password:
          <br />
          <input placeholder="Masukkan Password" type={"password"} />
        </label>
        <br />
        <Link to='/dashboard' className='btn-mobile'>
        <button>Sign In!</button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
