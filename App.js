import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" style={{ color: "blue" }}>
    Using Jsx
  </h1>
);

const FunctionalComponent = () => (
    <div className="contaner"> 
    <Title/>
        <h1 className="heading">React Using Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);
