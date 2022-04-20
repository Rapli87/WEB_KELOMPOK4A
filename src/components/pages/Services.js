import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/products.css";

const Services = () => {
   return (
    <div class="container">
    <h2>Oops! Page not found.</h2>
    <h1>404</h1>
    <p>We can't find the page you're looking for.</p>
    <Link to="/">
    <a>Go back home</a>
    </Link>
  </div>
   );
};

export default Services;
