import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Loader from "../components/Loader";
import "../styles/Formview.css";

const FormView = ({ company, application, setApplication }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isValid, setIsValid] = useState(false);

  let history = useHistory();

  const validateFullName = (fullName) => {
    const re = /^[a-zA-Z].*[\s\.]*$/g;
    return re.test(String(fullName).toLowerCase());
  };

  const validateEmail = (email) => {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  };

  const validateMessage = (message) => {
    if (message.length >= 5000 || message === "" || message === " ") {
      return false;
    } else return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      validateFullName(application.fullName) &&
      validateEmail(application.email) &&
      validateMessage(application.message)
    ) {
      setIsLoading(true);
      setIsValid(true);
      setTimeout(() => history.push("/summary"), 2000);
    } else {
      setIsValid(false);
      alert("Incorrectly completed form!");
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://baconipsum.com/api/?type=all-meat&paras=2"
      );
      const jsonData = await res.json();
      setApplication({ ...application, message: jsonData[0] });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className="form" action="">
      <div className="form__info">
        <svg
          fill={isValid ? "#fff" : "#07111b"}
          id="Capa_1"
          enableBackground="new 0 0 512 512"
          height="60"
          viewBox="0 0 512 512"
          width="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m256.001 223.395 235.986-177.562h-471.974z" />
            <path d="m241.001 383.534h30v82.632h-30z" />
            <path d="m512 353.167v-284.848l-255.999 192.62-256.001-192.62v284.848zm-458-83.999h85.333v30h-85.333z" />
            <path d="m166.335 383.534h30v50.632h-30z" />
            <path d="m315.668 383.534h30v50.632h-30z" />
          </g>
        </svg>
        <h2>Application for department in {company}</h2>
      </div>

      <input
        className="form__input"
        type="text"
        placeholder="Full name (eg. John Doe)"
        required
        value={application.fullName}
        onChange={(e) =>
          setApplication({ ...application, fullName: e.target.value })
        }
      />
      <input
        className="form__input"
        type="text"
        placeholder="Email (eg. johndoe@gmail.com)"
        required
        value={application.email}
        onChange={(e) =>
          setApplication({ ...application, email: e.target.value })
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <textarea
          className="form__textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message here..."
          value={application.message}
          onChange={(e) =>
            setApplication({ ...application, message: e.target.value })
          }
        ></textarea>
      )}

      <button className="form__btn" type="submit" onClick={handleFormSubmit}>
        {isLoading ? <Loader /> : "Send"}
      </button>
    </form>
  );
};

export default FormView;
