import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const Button = ({
  value,
  linkValue,
  selectedBranch,
  setSelectedBranch,
  company,
  setCompany,
}) => {
  const btn = useRef();

  return (
    <Link to={linkValue}>
      <button
        ref={btn}
        onClick={() => {
          if (btn.current.textContent === "Next") {
            setCompany(selectedBranch);
            setSelectedBranch("");
          }
        }}
        className={`button ${selectedBranch ? "formBtn" : ""}`}
      >
        {value}
      </button>
    </Link>
  );
};

export default Button;
