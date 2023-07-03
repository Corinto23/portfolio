import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DownloadButton from "./DownloadButton";
import resumePdf from "../assets/resume/Salazar, Robin - resume.pdf";

const Contact = () => {
  const resumeUrl = resumePdf;

  return (
    <div className="h-screen flex justify-center items-center" id="contact">
      <div className=" flex flex-col items-center ">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Contact Me</h1>
        <div className="flex space-x-4">
          <a
            href="mailto:salazar72390@gmail.com"
            className="text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/salazarrobin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
          <a
            href="https://www.facebook.com/salazar72390"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
        </div>
        <div className="mt-4">
          <DownloadButton resumeUrl={resumeUrl} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
