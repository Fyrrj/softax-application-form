import React from "react";
import loader from "../img/loader.svg";
import "../styles/Loader.css";

const Loader = () => {
  return <img className="loader" src={loader} alt="spinner" />;
};

export default Loader;
