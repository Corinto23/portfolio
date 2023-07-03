import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import kateSade from "../assets/images/kateSade.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      className="bg-cover bg-center py-20 h-screen flex"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')",
      }}
      id="/"
    >
      <div className="container flex flex-col h-screen justify-evenly  text-center">
        <div className="">
          <img
            className="mx-auto h-40 w-40 rounded-full"
            src={kateSade}
            alt="profile"
          />
          <h1 className="text-4xl font-bold mt-4">
            Hello, I'm
            <span
              className="font-montserrat text-red-500
        "
            >
              Robin
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900">
            Full-Stack Developer
          </h2>
          <div className="flex justify-center ">
            <p className="text-xl my-4 md:w-96 ">
              specializing in web application development. Fast learner and
              adaptable, always ready to tackle new challenges.
            </p>
          </div>
        </div>

        <div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <button className="text-xl bg-red-500 hover:bg-red-600  text-white font-semibold py-2 px-4 rounded">
              Contact Me
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-2"
              />
            </button>
          </Link>
          <div className="my-4  flex justify-center gap-4">
            <button className="hover:bg-red-600 rounded-full">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </button>
            <button className="hover:bg-red-600 rounded-full">
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </button>
            <button className="  hover:bg-red-600 rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
