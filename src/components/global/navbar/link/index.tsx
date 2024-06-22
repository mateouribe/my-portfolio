import { useNavigate } from "react-router-dom";
import React, { useLayoutEffect, useRef } from "react";
import { navigateToPage } from "../../../../utils/navigateToPage";
import Home from "../icons/home";
import Contact from "../icons/contact";
import Timeline from "../icons/timeline";
import { useStatesContext } from "../../../../context/StatesProvider";
import { colors } from "../../../../utils/constants";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  route: string;
  icon: "home" | "timeline" | "contact";
};

const Link = ({ children, onClick, route, icon }: Props) => {
  const { isDarkMode } = useStatesContext();
  const navigate = useNavigate();
  const container = useRef<HTMLLIElement>(null);
  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });
      const tl = timeline.current;

      tl.to(".link-to-animate", {
        y: -2.5,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }, container);

    return () => ctx.revert();
  }, [container]);

  return (
    <li
      className="cursor-pointer"
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
      ref={container}
      onMouseEnter={() => {
        timeline?.current?.play();
      }}
      onMouseLeave={() => {
        timeline?.current?.reverse();
      }}
    >
      <div className="flex items-center gap-1 tracking-tight text-black link-to-animate text-14">
        {icon === "home" ? (
          <Home fill={isDarkMode ? colors.white : colors.black} />
        ) : icon === "contact" ? (
          <Contact fill={isDarkMode ? colors.white : colors.black} />
        ) : icon === "timeline" ? (
          <Timeline fill={isDarkMode ? colors.white : colors.black} />
        ) : null}
        {children}
      </div>
    </li>
  );
};

export default Link;
