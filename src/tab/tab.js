import React from "react";
import "./tab.css";

const Tab = ({ title, id, children }) => {
  return (
    <React.Fragment>
      <a className="tab" href={`#${id}`} id={id}>
        {title}
      </a>
      <div className="tab-panel-container">{children}</div>
    </React.Fragment>
  );
};

export default Tab;
