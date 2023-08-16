import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ContextBox from "./ContentBox.jsx";

export default function App() {
  return (
    <div className="shadowed-box">
      <Header />
      <ContextBox />
      <Footer />
    </div>
  );
}
