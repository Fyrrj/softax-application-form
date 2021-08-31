import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import FormView from "./views/FormView";
import SummaryFormView from "./views/SummaryFormView";
import PrivacyPolicyView from "./views/PrivacyPolicyView";
import CompanyBranch from "./views/CompanyBranch";
import Button from "./components/Button";
import { logoSrc } from "./utils/links";
import bg1 from "./img/buildings.svg";
import bg2 from "./img/buildings2.svg";
import bg3 from "./img/hook.svg";
import bg4 from "./img/cityscape.svg";
import "./styles/App.css";

const App = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [company, setCompany] = useState("");

  const [application, setApplication] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  return (
    <Router>
      <div className="app">
        <img className="app__bg first" src={bg1} alt="" />
        <img className="app__bg second" src={bg2} alt="" />
        <img className="app__bg third" src={bg3} alt="" />
        <img className="app__bg fourth" src={bg4} alt="" />
        <nav className="nav">
          <div className="nav__inner">
            <Link to="/">
              <img className="inner__logo" src={logoSrc} alt="logo" />
            </Link>
            <div className="nav__btns">
              <Button value="Home" linkValue="/" />
              <Button value="Privacy Policy" linkValue="privacy-policy" />
            </div>
          </div>
        </nav>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <CompanyBranch
                selectedBranch={selectedBranch}
                setSelectedBranch={setSelectedBranch}
                company={company}
                setCompany={setCompany}
              />
            </Route>
            <Route path="/form">
              {company ? (
                <FormView
                  company={company}
                  application={application}
                  setApplication={setApplication}
                />
              ) : (
                <div className="form__checker">
                  <span className="checker__span">
                    Please select a branch again
                  </span>
                  <Button
                    value="go back!"
                    linkValue="/"
                    className="checker__btn"
                  />
                </div>
              )}
            </Route>
            <Route path="/summary">
              <SummaryFormView
                fullName={application.fullName}
                email={application.email}
                company={company}
              />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicyView />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
