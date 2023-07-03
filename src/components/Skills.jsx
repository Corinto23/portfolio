import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const skillsData = {
  frontEndSkills: [
    { name: "HTML", level: 90, icon: faHtml5 },
    { name: "CSS", level: 85, icon: faCss3Alt },
    { name: "JavaScript", level: 95, icon: faJsSquare },
    { name: "React.js", level: 80, icon: faReact },
  ],
  backEndSkills: [
    { name: "Node.js", level: 85, icon: faNodeJs },
    { name: "XAMPP", level: 80, icon: faDatabase },
    { name: "Git", level: 90, icon: faGitAlt },
    { name: "PHP", level: 80, icon: faPhp },
  ],
};

const SkillLine = ({ name, level, icon }) => (
  <div className=" mb-2">
    {icon && (
      <div className="">
        <FontAwesomeIcon icon={icon} size="" />
        <span className="text-xl font-semibold ml-1">{name}</span>
      </div>
    )}
    <div>
      <div className="flex items-center">
        <div className="h-2 flex-grow bg-red-600 rounded-full">
          <div
            className="h-full bg-red-400 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <div className="w-8 ml-2 font-semibold text-xl">{level}%</div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="h-screen flex justify-center lg:items-center " id="skills">
      <div className="py-2 md:w-3/6">
        <h1 className=" text-2xl md:text-4xl font-bold text-red-500 text-center">
          Skills
        </h1>
        <div className="">
          <h2 className="text-xl font-bold mb-4 text-center ">
            <FontAwesomeIcon icon={faCode} className="text-red-500 mr-1" />
            Front-End Skills
          </h2>
          {skillsData.frontEndSkills.map((skill) => (
            <SkillLine
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>

        <div className="my-4">
          <h2 className="text-xl font-bold mb-4 text-center">
            <FontAwesomeIcon icon={faServer} className="text-red-500 mr-1" />
            Back-End Skills:
          </h2>
          {skillsData.backEndSkills.map((skill) => (
            <SkillLine
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
