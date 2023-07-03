import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const DownloadButton = ({ resumeUrl }) => {
  return (
    <button className="text-xl bg-red-500 hover:bg-red-600  text-white font-semibold py-2 px-4 rounded ">
      <a href={resumeUrl} download>
        Resume
        <FontAwesomeIcon icon={faFileArrowDown} size="xl" className="ml-2" />
      </a>
    </button>
  );
};

export default DownloadButton;
