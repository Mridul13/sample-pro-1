import React from "react";
import "./footer.css";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="myFooter">
      <a href={"https://www.instagram.com/mridtz13/"}>
        <FaInstagramSquare className="iconInsta" />
      </a>

      <a href={"https://www.linkedin.com/in/mridul-pathak-110789197/"}>
        <FaLinkedin className="iconLinkedin" />
      </a>

      <a href={"https://github.com/Mridul13/"}>
        <FaGithubSquare className="iconGithub" />
      </a>
    </div>
  );
}
