import { useNavigate } from "react-router";
import { navigateToPage } from "../../utils/navigateToPage";
import { useStatesContext } from "../../context/StatesProvider";

const NotFound = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useStatesContext();

  return (
    <section
      className={`relative flex flex-col items-center justify-center w-full h-view ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <h2
        className={`text-[500px] font-bold  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none ${
          isDarkMode ? "text-[#252525]" : "text-lightGray"
        }`}
      >
        404
      </h2>
      <h1
        className={`text-[100px] font-medium leading-[99%] text-center relative z-[2] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Opaaa!, it's not here.
      </h1>
      <br />
      <p
        onClick={() => {
          navigateToPage(navigate, "/");
        }}
        className={`z-[2] relative cursor-pointer ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Go back home
      </p>
    </section>
  );
};

export default NotFound;
