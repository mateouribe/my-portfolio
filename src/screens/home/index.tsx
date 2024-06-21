import Wrapper from "../../components/global/wrapper";
import HighlightText from "../../components/global/highlightText";
import Button from "../../components/customElements/button";
import Timeline from "../../components/timeline";
import Skills from "../../components/skills";
import hero1 from "../../assets/images/hero1.mp4";
import Contact from "../../components/contact";
import { useStatesContext } from "../../context/StatesProvider";
import { useLayoutEffect, useRef } from "react";
import { colors } from "../../utils/constants";
import gsap from "gsap";

const Home = () => {
  const { isDarkMode } = useStatesContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".background-color-will-change", {
        backgroundColor: isDarkMode ? colors.black : colors.white,
        duration: 0,
      });
      gsap.to(".text-color-will-change", {
        color: isDarkMode ? colors.white : colors.black,
        duration: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDarkMode]);

  return (
    <section
      ref={sectionRef}
      className={`${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      {/* Hero */}
      <section id="index" className="">
        <Wrapper className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-title mb-30">
              <span className={`${isDarkMode ? "text-white" : "text-black"}`}>
                Hey, this is Mateo Arismendy
              </span>
              <br />
              <span
                className={`pr-8 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                I am a
              </span>
              <HighlightText color="#FF4C00">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline"
                  style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
                >
                  <path
                    d="M27 15H26V3C25.9871 2.20837 25.6669 1.45276 25.1071 0.892921C24.5472 0.333078 23.7916 0.0128746 23 0H5C4.20837 0.0128746 3.45276 0.333078 2.89292 0.892921C2.33308 1.45276 2.01287 2.20837 2 3V12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13C3.26522 13 3.51957 12.8946 3.70711 12.7071C3.89464 12.5196 4 12.2652 4 12V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H23C23.2652 2 23.5196 2.10536 23.7071 2.29289C23.8946 2.48043 24 2.73478 24 3V16C24 16.2652 24.1054 16.5196 24.2929 16.7071C24.4804 16.8946 24.7348 17 25 17H26V17.88C26 18.4423 25.7766 18.9815 25.3791 19.3791C24.9815 19.7766 24.4423 20 23.88 20H4.12C3.55774 20 3.01851 19.7766 2.62093 19.3791C2.22336 18.9815 2 18.4423 2 17.88V17H9.59L10.29 17.71C10.3834 17.8027 10.4943 17.876 10.6161 17.9258C10.7379 17.9755 10.8684 18.0008 11 18H17C17.1316 18.0008 17.2621 17.9755 17.3839 17.9258C17.5057 17.876 17.6166 17.8027 17.71 17.71L18.41 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16C22 15.7348 21.8946 15.4804 21.7071 15.2929C21.5196 15.1054 21.2652 15 21 15H18C17.8684 14.9992 17.7379 15.0245 17.6161 15.0742C17.4943 15.124 17.3834 15.1973 17.29 15.29L16.59 16H11.41L10.71 15.29C10.6166 15.1973 10.5057 15.124 10.3839 15.0742C10.2621 15.0245 10.1316 14.9992 10 15H1C0.734784 15 0.48043 15.1054 0.292893 15.2929C0.105357 15.4804 0 15.7348 0 16V17.88C0.00264059 18.9719 0.437559 20.0183 1.20964 20.7904C1.98172 21.5624 3.02812 21.9974 4.12 22H23.88C24.9719 21.9974 26.0183 21.5624 26.7904 20.7904C27.5624 20.0183 27.9974 18.9719 28 17.88V16C28 15.7348 27.8946 15.4804 27.7071 15.2929C27.5196 15.1054 27.2652 15 27 15Z"
                    fill="#FF4C00"
                  />
                </svg>
                Front end Developer
              </HighlightText>
            </h1>

            <div className="flex flex-col items-start gap-10 md:flex-row md:gap-30">
              <Button>View my Resume</Button>
              <Button backgroundColor="white">Visit LinkedIn Profile</Button>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <p className="tracking-tight text-paragraph text-gray mb-[56px] w-full md:w-[90%]">
              Crafting seamless and engaging applications through thoughtful
              design and code. My goal is to exceed user expectations across all
              devices.
            </p>
          </div>
        </Wrapper>

        {/* Video */}
        <div className="px-10 mb-10 w-full h-[70vh] relative">
          <div className="w-[calc(100%-20px)] h-full absolute -bottom-[4%] left-1/2 transform -translate-x-1/2 rounded-12 z-[99] overflow-hidden shadow-sm">
            <video
              className="object-cover w-full h-full"
              autoPlay={false}
              loop
              muted
              src={hero1}
            />
          </div>
        </div>
      </section>
      {/* Summary */}
      <section className="relative bg-black">
        <svg width="100%" height="100%" className="absolute top-0 left-0">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="10"
              cy="10"
              r="1.6257413380501518"
              fill="#343638"
            ></circle>
          </pattern>

          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>

        <Wrapper maxScreen600 className="z-10 !py-desktop">
          <p className="text-white text-importantParagraph  relative z-[1] mb-30">
            Hello! I'm a passionate Front-End Developer with a knack for
            creating stunning and functional digital experiences. My journey
            started with a love for games and computers, leading me to a career
            in programming. Over the years, I've developed skills in WordPress,
            React, and mobile app development, always focusing on user
            engagement.
          </p>
          <p className="text-white text-importantParagraph  relative z-[1] mb-30">
            I've worked on diverse projects, including crafting custom WordPress
            themes for a company in Bogotá, redesigning interfaces with React JS
            for Amazing Pet Grooming, and developing an educational app with
            React Native and Firebase. My ability to align with business goals
            and iterate based on feedback has been crucial to my success.
          </p>
          <p className="text-white text-importantParagraph relative z-[1] ">
            With a Computer System Technician diploma from SENA in Colombia and
            a Computer Programming diploma from Conestoga College in Canada, I
            bring creativity, technical expertise, and a user-focused approach
            to every project.
            <a className="cursor-pointer text-darkOrange">
              {" "}
              Let's connect and create something amazing together!
            </a>
          </p>
        </Wrapper>
      </section>

      <Skills />
      <Timeline />
      <Contact />
    </section>
  );
};

export default Home;
