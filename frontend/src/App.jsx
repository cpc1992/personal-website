import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import ContextBox from "./ContentBox.jsx";

export default function App() {
  return (
    <div className="margin-box">
      <div className="shadowed-box">
        <Header />
        <ContextBox />
      </div>
    </div>
  );
}
