import React from "react";
import "./FlexLayout.css";

const FlexLayout = (props) => {
  return (
    <section className="flex-layout">
      {Array(10)
        .fill("test div")
        .map((thisDiv) => (
          <div className="flex-children">{thisDiv}</div>
        ))}
    </section>
  );
};

export default FlexLayout;
