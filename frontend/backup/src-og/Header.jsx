import { useState } from "react";

export default function Header() {
  return (
    <nav>
      <div className="logo-div">
        <p className="logo">CC</p>
      </div>

      <ul className="nav-links">
        <li className="nav-link">
          <a href="/">Home</a>
        </li>
        <li className="nav-link">
          <a href="/">About</a>
        </li>

        <li className="nav-link">
          <a href="/">Pricing</a>
        </li>
        <li className="nav-link">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
