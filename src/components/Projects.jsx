import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mp1 from "../assets/images/mp1.png";
import mp2 from "../assets/images/mp2.png";
import mp3 from "../assets/images/mp3.png";

const images = [
  {
    link: "https://corinto23.github.io/mini-project-1/",
    image: mp1,
    title: "Damien Echols - Biography Website",
    description:
      "The Damien Echols Biography Website is a HTML and Bootstrap-based website that provides a concise and informative overview of Damien Echols' life, including his wrongful conviction as part of the West Memphis Three and his subsequent journey as an author, artist, and advocate for criminal justice reform.",
  },
  {
    link: "https://befound99.github.io/MP2_Animx/index.html",
    image: mp2,
    title: "AnimX E-Commerce Website",
    description:
      "The Animx E-commerce Website is a platform dedicated to selling anime media, including videos, manga, and various merchandise related to anime. Developed using HTML, Bootstrap, and JavaScript, this website offers a user-friendly interface that allows visitors to browse and purchase their favorite anime content and merchandise. With its responsive design and intuitive features, the Animx E-commerce Website provides anime enthusiasts with a convenient and enjoyable online shopping experience.",
  },
  {
    link: "http://13.239.17.195:3000/",
    image: mp3,
    title: "PurPri - Cleaning Services Website",
    description:
      "PurPri is a professional Cleaning Services website that provides comprehensive cleaning solutions for homes and businesses. With easy online booking, customers can schedule tailored cleaning services, such as regular cleaning, deep cleaning, and move-in/move-out cleaning. The website is built using HTML, Tailwind CSS, React.js, Node.js, Express.js, and MySQL, ensuring a seamless user experience and efficient management of appointments and customer data.",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    window.open(images[index].link, "_blank");
  };

  return (
    <div className="h-screen" id="projects">
      <div className="px-4 pt-2">
        <h1 className="my-4 text-4xl font-bold text-red-500 text-center">
          Projects
        </h1>
        <style>
          {`
            /* Custom CSS */
            .carousel .thumb {
              border: 2px solid gray; /* Change the border color here */
            }

            .carousel .thumb.selected {
              border-color: red; /* Change the active thumbnail border color here */
            }
          `}
        </style>
        <div>
          <Carousel
            showStatus={false}
            showArrows={true}
            stopOnHover={true}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={true}
            emulateTouch={true}
            swipeable={true}
            selectedItem={activeIndex}
            onChange={setActiveIndex}
            thumbWidth={80}
            interval={3000}
            transitionTime={500}
          >
            {images.map((item, index) => (
              <div
                className="flex md:h-72 lg:h-96"
                key={index}
                onClick={() => handleImageClick(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="object-contain"
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="md:mx-8">
          <h1 className="md:text-xl lg:text-2xl font-bold">
            {images[activeIndex].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {images[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
