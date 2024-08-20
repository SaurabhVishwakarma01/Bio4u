import React from "react";
// import Button from "./Button";
// import IonIcon from "@reacticons/ionicons";

// import { Link } from "react-router-dom";

import "./NewLanding.css";
import NewNav from "./NewNav";
import Footer from "./Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Courses from "./Courses";
import Banner from "./Banner";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function NewLanding() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NewNav />
      <body className="bgbody">
        {/* updated*/}
        <div className="maindiv">
          <AnimatedOnScroll animationIn="fadeIn">
            <div>
              <video autoPlay loop muted className="main-video">
                <source src="/assets/ready.mp4" type="video/mp4" />
              </video>
            </div>
          </AnimatedOnScroll>
        </div>

        <div id="mainslide" className="w-3/4 m-auto">
          <AnimatedOnScroll animationIn="fadeIn">
            <p className="slogan">
              You <span className="dream">Dream...</span> We{" "}
              <span className="guide">Guide</span>
            </p>
          </AnimatedOnScroll>
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div
                  id="slides"
                  key={d.name}
                  className="bg-white h-[420px] text-black rounded-xl"
                >
                  <div
                    id="slidesr"
                    className="h-65 bg-indigo-500 flex justify-center items-center rounded-t-xl"
                  >
                    <img src={d.img} alt="" className="h-44 w-44" />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p id="toppername" className="text-xl font-semibold">
                      {d.name}
                    </p>
                    <p id="topperreview" className="text-center">
                      {d.review}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <AnimatedOnScroll animationIn="fadeIn">
          <div className="mainvision">
            <p className="vision1">
              Unlock your potential with <span className="bio4u">Bio4u</span>{" "}
              Coaching Institution - where
              <span className="ordinary">ordinary</span> cutting-edge{" "}
            </p>
            <p className="vision2">
              {" "}
              education meets personalized guidance,empowering you to achieve
              your{"  "}
            </p>
            <p className="vision3">academic dreams.</p>
          </div>
        </AnimatedOnScroll>

        {/* course start*/}
        {/* <Course/> */}
        {/* course end*/}
        <Courses />

        <Banner />

        <AnimatedOnScroll animationIn="fadeIn">
          <Footer />
        </AnimatedOnScroll>
      </body>
    </>
  );
}
const data = [
  // {
  //   name: `John Morgan`,
  //   img: `./images/img_1.png`,
  //   review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  // },
  {
    name: `Jill D. Rachh (99.11%ile)`,
    img: `/assets/1.png`,
    review: `During my journey, BIO4U Biology Private Tuitions and Prof. Sushil Mishra significantly impacted me.  `,
  },
  
  {
    name: `Piyush P. Ghosh (97.48%ile)`,
    img: `/assets/3.png`,
    review: `Prof. Sushil Mishra's Bio4U Biology Private Tuitions offer an amazing, simplified, and interesting learning experience.`,
  },
  {
    name: `Jiya D. Rachh (98.7%ile)`,
    img: `/assets/22.png`,
    review: `I'm fortunate to have Bio4U as my professor. Their unwavering support and high expectations motivate me to strive harder.  `,
  },
  {
    name: `Jayalakshmi Iyer (99.59%ile)
         
    `,
    img: `/assets/4.png`,
    review: `From day one, Sir's quality conceptual teaching, regular mentoring, and timely error analysis have been invaluable.`,
  },
];

export default NewLanding;
