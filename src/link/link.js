import React from "react";
import "./link.css";

export default ({ label, link }) => {
  return (
    <div class="list-item">
      <a href={link}>{label}</a>
    </div>
  );
};
