import { useRef } from "react";
import { useStatesContext } from "../../../context/StatesProvider";
import Link from "./link";
import { colors } from "../../../utils/constants";
import Light from "./icons/light";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useStatesContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className="sticky top-0 left-0 z-[999] border-gainsboro border-b-[0.5px] shadow-sm py-[20px] bg-white background-color-will-change"
      ref={sectionRef}
    >
      <nav className="flex flex-row items-center self-end justify-center lg:justify-end px-20 lg:px-[60px]">
        <ul className="flex flex-row items-center gap-30">
          <li onClick={toggleDarkMode} className="cursor-pointer">
            <Light fill={isDarkMode ? colors.white : colors.black} />
          </li>
          <Link route="/#index" icon="home">
            Home
          </Link>
          <Link route="#timeline" icon="timeline">
            Timeline
          </Link>
          <Link route="#contact" icon="contact">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
