import React, {useState} from 'react';

// styling
import '../App.css';

// components
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

const Container = () => {
  const [welcome, setWelcome] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"] 
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className="Container cfb">