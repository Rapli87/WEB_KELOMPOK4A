import React from 'react';

// styling
import '../App.css';

const SignUp = () => {

  return (
    <div className="form-comp cfb">
      <h1>Create an Account!</h1>
      <form className="sign-up-form cfb">
        <label>
          Nama:
          <br/>
          <input placeholder="Masukkan Nama" />
        </label>
        <label>
          Email:
          <br/>
          <input placeholder="Masukkan Email" type={'email'} />
        </label>
        <label>
          Password:
          <br/>
          <input placeholder="Password" type={'password'}/>
        </label>
        <br/>
        <button>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;