import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React.js is back", "Top news - 10,431 readers")}
      {newsArticle("Coronavirus: Melbourne Updates", "Top news - 847 readers")}
      {newsArticle("Tesla hits new highs", "Car & auto - 546 readers")}
      {newsArticle("Redux vs. Context API", "Code - 3,451 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 6,000 readers")}
    </div>
  );
};

export default Widgets;
