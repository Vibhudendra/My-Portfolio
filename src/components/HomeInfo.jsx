import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center text-2xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Vibhudendra</span>👋
      <br />A Software Engineer from Bengaluru.
    </h1>
  ),
  2: (
    <InfoBox
      text="I am Currently working at TCS
         as a Frontend-Developer"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Projects that I have worked on"
      link="/projects"
      btnText="View Works"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev?, I'm just a few keystrokes away!"
      link="/contact"
      btnText="Let's Connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
