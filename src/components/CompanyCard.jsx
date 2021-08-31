import React, { useRef } from "react";
import "../styles/Companycard.css";

const CompanyCard = ({
  city,
  address,
  country,
  bg,
  setSelectedBranch,
  selectedBranch,
}) => {
  const card = useRef();

  return (
    <div
      ref={card}
      className={`companyCard ${
        selectedBranch === card?.current?.children[2].children[0].textContent
          ? "active"
          : ""
      }`}
      onClick={() => {
        setSelectedBranch(city);
      }}
    >
      <p className="companyCard__p">{address}</p>
      <img className="companyCard__img" src={bg} alt="" />
      <div className="companyCard__text">
        <h2 className="text__h2">{city}</h2>
        <p className="text__p">{country}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
