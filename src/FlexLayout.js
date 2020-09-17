import React from "react";
import "./FlexLayout.css";
import AuthForm from "./AuthForm";

const FlexLayout = (props) => {
  return (
    <section className="flex-layout">
      <AuthForm />
      {Array(10)
        .fill("test div")
        .map((thisDiv) => (
          <div className="flex-children">{thisDiv}</div>
        ))}
    </section>
  );
};

export default FlexLayout;
