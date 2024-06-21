import { useNavigate } from "react-router-dom";
import React from "react";
import { navigateToPage } from "../../../../utils/navigateToPage";
import Home from "../icons/home";
import Contact from "../icons/contact";
import Timeline from "../icons/timeline";
import { useStatesContext } from "../../../../context/StatesProvider";
import { colors } from "../../../../utils/constants";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  route: string;
  icon: "home" | "timeline" | "contact";
};

const Link = ({ children, onClick, route, icon }: Props) => {
  const { isDarkMode } = useStatesContext();

  const navigate = useNavigate();

  return (
    <li
      className="flex items-center gap-1 tracking-tight text-black cursor-pointer text-14 text-color-will-change"
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
    >
      {icon === "home" ? (
        <Home fill={isDarkMode ? colors.white : colors.black} />
      ) : icon === "contact" ? (
        <Contact fill={isDarkMode ? colors.white : colors.black} />
      ) : icon === "timeline" ? (
        <Timeline fill={isDarkMode ? colors.white : colors.black} />
      ) : null}
      {children}
    </li>
  );
};

export default Link;
