import React from "react";
import CompanyCard from "../components/CompanyCard";
import Button from "../components/Button";
import "../styles/Companybranch.css";
import warsawIcon from "../img/capital-warsaw.png";
import cracowIcon from "../img/cracow-icon.png";
import berlinIcon from "../img/berlin-icon.png";

const CompanyBranch = ({
  selectedBranch,
  setSelectedBranch,
  company,
  setCompany,
}) => {
  return (
    <div className="companyBranch">
      <div className="companyBranch__info">
        <h1 className="info__h1">Choose a department of the company,</h1>
        <p className="info__p">to which you want to submit an application...</p>
      </div>
      <div className="companyBranch__cards">
        <CompanyCard
          address="Marsa Street 21b"
          city="Warsaw"
          country="Poland"
          bg={warsawIcon}
          setSelectedBranch={setSelectedBranch}
          selectedBranch={selectedBranch}
        />
        <CompanyCard
          address="Bracka Street 135a"
          city="Cracow"
          country="Poland"
          bg={cracowIcon}
          setSelectedBranch={setSelectedBranch}
          selectedBranch={selectedBranch}
        />
        <CompanyCard
          address="Schönhauser Street 213s"
          city="Berlin"
          country="Germany"
          bg={berlinIcon}
          setSelectedBranch={setSelectedBranch}
          selectedBranch={selectedBranch}
        />
      </div>
      {selectedBranch.toLowerCase() === "warsaw" ||
      selectedBranch.toLowerCase() === "cracow" ||
      selectedBranch.toLowerCase() === "berlin" ? (
        <Button
          value="Next"
          linkValue="/form"
          selectedBranch={selectedBranch}
          company={company}
          setCompany={setCompany}
          setSelectedBranch={setSelectedBranch}
        />
      ) : null}
    </div>
  );
};

export default CompanyBranch;
