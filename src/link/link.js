import React from "react";
import "./link.css";

const Link = ({ label, link }) => {
  return (
    <div className="list-item">
      <a href={link}>{label}</a>
    </div>
  );
};

export default Link;
