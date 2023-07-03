import React from "react";
import {
  faGraduationCap,
  faAward,
  faCertificate,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className=" h-screen " id="education">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="my-8 text-4xl font-bold text-red-500 text-center">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-1" />
          Education
        </h1>
        <div className="flex">
          <div className="flex-1 ml-4 text-center">
            <h3 className="text-xl font-semibold">
              <FontAwesomeIcon icon={faCertificate} className="mr-1" />
              FULL-STACK WEB DEVELOPER
            </h3>
            <p className="text-lg">KodeGo BOOTHCAMP</p>
            <p className="">2023</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                <FontAwesomeIcon icon={faAward} className="mr-1" />
                AWARD
              </h3>
              <p className="text-lg">BIBONG KodeGeek</p>
            </div>
          </div>
          <div className="w-0.5 bg-gray-500 flex justify-center mt-2">
            <FontAwesomeIcon icon={faCircle} size="xs" />
          </div>
          <div className="flex-1 ml-4 "></div>
        </div>
        <div className="flex">
          <div className="flex-1 mr-4 "></div>
          <div className="w-0.5 bg-gray-500 flex justify-center pt-2">
            <FontAwesomeIcon icon={faCircle} size="xs" />
          </div>

          <div className="flex-1 ml-4 ">
            <h3 className="text-xl font-semibold text-center">
              <FontAwesomeIcon icon={faCertificate} className="mr-1" />
              Associate Degree in Computer Hardware Technology
            </h3>
            <p className="text-lg text-center">
              Datamex College of Saint Adeline
            </p>
            <p className="text-center ">2008 - 2010</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mr-4 "></div>
          <div className="w-0.5 bg-gray-500 flex justify-center">
            <FontAwesomeIcon icon={faCircle} size="xs" />
          </div>
          <div className="flex-1 ml-4 "></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
