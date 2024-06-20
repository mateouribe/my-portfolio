import { useNavigate } from "react-router-dom";
import React from "react";
import { navigateToPage } from "../../../../utils/navigateToPage";
import Home from "../icons/home";
import Technologies from "../icons/technologies";
import Education from "../icons/education";
import Projects from "../icons/projects";
import Contact from "../icons/contact";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  route: string;
  icon: "home" | "technologies" | "education" | "projects" | "contact";
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
      ) : icon === "technologies" ? (
        <Technologies />
      ) : icon === "education" ? (
        <Education />
      ) : icon === "projects" ? (
        <Projects />
      ) : icon === "contact" ? (
        <Contact />
      ) : null}
      {children}
    </li>
  );
};

export default Link;
