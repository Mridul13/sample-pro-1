import React from "react";
import {FaEnvelope} from 'react-icons/fa';
import Mridul from '../assets/Mridul.jpeg';
import './info.css';

export default function Info() {
  return (
    <div>
      <img src={Mridul} className="picture"/>
      <h2 className="myName">Mridul Pathak</h2>
      <p className="myProfession">Software Developer</p>
      <a className="emailIcon" href="mailto:mridulpathak1312001@gmail.com"><FaEnvelope className="icon"/><span className="email">Email</span></a>
    </div>
  );
}
