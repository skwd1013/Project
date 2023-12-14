import React from "react";

export default function Nav() {
  return (
    <nav>
      <img
        alt="netflix logo"
        src="image/logo.svg"
        className="nav__logo"
        onClick={() => window.location.reload()}
      ></img>
      <img
        alt="User Logged"
        src="image/netflix-avatar.png"
        className="avatar__logo"
      ></img>
    </nav>
  );
}
