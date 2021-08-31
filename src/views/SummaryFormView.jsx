import React from "react";
import moment from "moment";
import Button from "../components/Button";
import "../styles/Summaryformview.css";

let timestamp = Date.now();

const SummaryFormView = ({ fullName, email, company }) => {
  return (
    <div className="summaryFormView">
      {fullName ? (
        <>
          <h1 className="summaryFormView__h1">
            Successfully sent! <i className="fas fa-clipboard-check"></i>
          </h1>
          <h2 className="summaryFormView__h2">Application summary:</h2>
          <h3 className="summaryFormView__h3">Applicant iformation:</h3>
          <p className="summaryFormView__p">{fullName}</p>
          <p className="summaryFormView__p">{email}</p>
          <h3 className="summaryFormView__h3">Department information:</h3>
          {company === "Warsaw" && (
            <p className="summaryFormView__p">
              Warsaw, Marsa Street 21b - Poland
            </p>
          )}
          {company === "Cracow" && (
            <p className="summaryFormView__p">
              Cracow, Bracka Street 135a - Poland
            </p>
          )}
          {company === "Berlin" && (
            <p className="summaryFormView__p">
              Berlin, Schönhauser Street 213s - Deutschland
            </p>
          )}
          <h3 className="summaryFormView__h3">Date of application:</h3>
          <p className="summaryFormView__p last">
            {moment(timestamp).format("LL")}
          </p>
          <Button value="Send another" linkValue="/" />
        </>
      ) : (
        <Button value="Go back" linkValue="/" />
      )}
    </div>
  );
};

export default SummaryFormView;
