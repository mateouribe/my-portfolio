import { useNavigate } from "react-router-dom";
import React from "react";
import { navigateToPage } from "../../../../utils/navigateToPage";
import Home from "../icons/home";
import Contact from "../icons/contact";
import Timeline from "../icons/timeline";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  route: string;
  icon: "home" | "timeline" | "contact";
};

const Link = ({ children, onClick, route, icon }: Props) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex items-center gap-1 tracking-tight cursor-pointer text-14"
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
    >
      {icon === "home" ? (
        <Home />
      ) : icon === "contact" ? (
        <Contact />
      ) : icon === "timeline" ? (
        <Timeline />
      ) : null}
      {children}
    </li>
  );
};

export default Link;
