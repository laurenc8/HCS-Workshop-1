import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Lauren Chen</h1>
        <div className="info-bar">
          <p className="info-item">lychen@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/laurenc82/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.facebook.com/lauren.chen.10004694" }}
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com/laurenc.82/" }}
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://open.spotify.com/user/snp6ce9d1t5lwjorn4pxhu6mz" }}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link to={{ pathname: "/about" }}>
          About
        </Link>
        <Link to={{ pathname: "/education" }}>
          Education
        </Link>
        <Link to={{ pathname: "/experience" }}>
          Experience
        </Link>
        <Link to={{ pathname: "/music" }}>
          Music
        </Link>
        <Link to={{ pathname: "/projects" }}>
          Projects
        </Link>
      </div>
    </>
  );
}
