import React from "react";

const Title = ({ firstWord, lastWord }) => {
  return (
    <div className="section-title">
      <h2>
        {firstWord} <span>{lastWord}</span>
      </h2>
    </div>
  );
};

export default Title;
