import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Dock, DockIcon } from "./dock/dock";
import contactImage from "../../assets/images/contact-image.png";
import contactImage2 from "../../assets/images/contact-image2.png";
import useIsDesktop from "../../utils/useIsDesktop";
import { useStatesContext } from "../../context/StatesProvider";

gsap.registerPlugin(ScrollTrigger);

export type IconProps = React.HTMLAttributes<SVGElement>;

const Contact = () => {
  const { isDarkMode } = useStatesContext();

  const container = useRef<HTMLDivElement>(null);

  const isDesktop = useIsDesktop();
  const Icons = {
    gitHub: (props: IconProps) => (
      <svg viewBox="0 0 438.549 438.549" {...props}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        ></path>
      </svg>
    ),
    linkedin: (props: IconProps) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_132_10)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24Z"
            fill="#007EBB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6668 20.6668H17.1054V14.6009C17.1054 12.9377 16.4734 12.0083 15.1571 12.0083C13.725 12.0083 12.9769 12.9755 12.9769 14.6009V20.6668H9.54461V9.11127H12.9769V10.6678C12.9769 10.6678 14.0088 8.75823 16.461 8.75823C18.9121 8.75823 20.6668 10.255 20.6668 13.3506V20.6668ZM5.44995 7.59817C4.28085 7.59817 3.3335 6.64338 3.3335 5.46583C3.3335 4.28828 4.28085 3.3335 5.44995 3.3335C6.61904 3.3335 7.56583 4.28828 7.56583 5.46583C7.56583 6.64338 6.61904 7.59817 5.44995 7.59817ZM3.67768 20.6668H7.25663V9.11127H3.67768V20.6668Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_132_10">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    iMessage: (props: IconProps) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_132_26)">
          <path
            d="M18.7143 0H5.28571C2.3665 0 0 2.3665 0 5.28572V18.7143C0 21.6335 2.3665 24 5.28571 24H18.7143C21.6335 24 24 21.6335 24 18.7143V5.28572C24 2.3665 21.6335 0 18.7143 0Z"
            fill="url(#paint0_linear_132_26)"
          />
          <path
            d="M11.9999 4.15479C9.66358 4.1548 7.42301 4.92783 5.77101 6.30383C4.11902 7.67983 3.19093 9.54608 3.19092 11.492C3.19305 12.7578 3.58826 14.0015 4.33814 15.1024C5.08802 16.2033 6.16707 17.1239 7.47042 17.7748C7.12329 18.5519 6.60266 19.2807 5.93011 19.9308C7.23436 19.7019 8.45868 19.2209 9.50779 18.5253C10.3167 18.7256 11.156 18.8279 11.9999 18.8293C14.3361 18.8293 16.5767 18.0562 18.2287 16.6802C19.8807 15.3042 20.8088 13.438 20.8088 11.492C20.8088 9.54608 19.8807 7.67983 18.2287 6.30383C16.5767 4.92783 14.3361 4.1548 11.9999 4.15479Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_132_26"
            x1="12.1905"
            y1="22.4069"
            x2="12.1905"
            y2="2.97851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0CBD2A" />
            <stop offset="1" stop-color="#5BF675" />
          </linearGradient>
          <clipPath id="clip0_132_26">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    gmail: (props: IconProps) => (
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_132_14)">
          <path
            d="M1.63636 17.9999H5.45455V8.72714L0 4.63623V16.3635C0 17.269 0.733636 17.9999 1.63636 17.9999Z"
            fill="#4285F4"
          />
          <path
            d="M18.5454 17.9999H22.3636C23.269 17.9999 24 17.2662 24 16.3635V4.63623L18.5454 8.72714"
            fill="#34A853"
          />
          <path
            d="M18.5454 1.63612V8.72703L24 4.63612V2.4543C24 0.430668 21.69 -0.722968 20.0727 0.490668"
            fill="#FBBC04"
          />
          <path
            d="M5.45459 8.72714V1.63623L12 6.54532L18.5455 1.63623V8.72714L12 13.6362"
            fill="#EA4335"
          />
          <path
            d="M0 2.4543V4.63612L5.45455 8.72703V1.63612L3.92727 0.490668C2.30727 -0.722968 0 0.430668 0 2.4543Z"
            fill="#C5221F"
          />
        </g>
        <defs>
          <clipPath id="clip0_132_14">
            <rect width="24" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".contact-image");

      images.forEach((el) => {
        const element = el as HTMLElement;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        });

        tl.fromTo(
          element,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
          }
        );
      });
    }, [container.current]);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      className="flex flex-col w-full gap-50 lg:gap-20 lg:flex-row p-mobile py-tablet background-color-will-change"
      ref={container}
      id="contact"
    >
      <div
        className={`w-full lg:w-[70%] min-h-[50vh] shadow-sm rounded-30 flex flex-col px-20 lg:px-50 justify-center items-center lg:items-start relative overflow-hidden ${
          isDarkMode ? "bg-[#2A2A2A]" : "bg-[#F5F5F5]"
        }`}
      >
        <h3
          className={`mb-20 font-semibold leading-tight tracking-tight text-center lg:text-left text-25 lg:text-37 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Connect with me using <br />
          any of these 👇
        </h3>
        <Dock className="border-[#DFDFDF] px-20 lg:self-start /20 rounded-30 z-[2] relative">
          <DockIcon
            className="shadow-sm"
            href="https://www.linkedin.com/in/mateo-arismendy-uribe/"
          >
            <Icons.linkedin className="w-30 h-30" />
          </DockIcon>
          <DockIcon
            className="shadow-sm"
            href="mailto:arismendyuribemateo@gmail.com"
          >
            <Icons.gmail className="w-30 h-30" />
          </DockIcon>

          <DockIcon className="shadow-sm" href="https://github.com/mateouribe">
            <Icons.gitHub className="w-30 h-30" />
          </DockIcon>
          <DockIcon className="shadow-sm" href="sms:+14375186019">
            <Icons.iMessage className="w-30 h-30" />
          </DockIcon>
        </Dock>
        <img
          className="absolute bottom-[0%] lg:-bottom-[15%] left-[10%] w-[70%] lg:w-[50%] pointer-events-none z-[1] contact-image"
          src={contactImage2}
        />
      </div>
      <div
        className={`w-full lg:w-[30%] min-h-[50vh]  shadow-sm rounded-30 flex flex-col items-start justify-end p-20 relative ${
          isDarkMode ? "bg-[#372118]" : "bg-[#FFEAD6]"
        }`}
      >
        <h4 className="font-medium leading-tight tracking-tight text-left text-20 lg:text-28 text-[#FF4B00]">
          I'm <br />
          Open to Work
        </h4>
        <img
          className="absolute -top-[10%] -right-[3%] w-[80%] lg:w-full pointer-events-none contact-image"
          src={contactImage}
        />
      </div>
    </section>
  );
};

export default Contact;
