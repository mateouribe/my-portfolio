import hexToRgba from "../../../../utils/hexToRbg";
import Button from "../../../customElements/button";
import prueba from "../../../../assets/images/prueba.png";
import { useStatesContext } from "../../../../context/StatesProvider";

type Props = {
  title: string;
  description: string;
  className?: string;
  color: string;
  img?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
};

const ItemMobile = ({
  title,
  description,
  className,
  color,
  img,
  hasButton = false,
  buttonText,
  buttonHref,
}: Props) => {
  const { isDarkMode } = useStatesContext();

  return (
    <div className={`${className} w-full flex flex-col relative`}>
      {/* Circle */}
      <div
        className={`absolute w-20 h-20 rounded-[4px] border z-[3] top-0 -left-[9.5px] timeline-item-square-mobile ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
        style={{ borderColor: hexToRgba(color, 0.65) }}
      ></div>

      {/* Content */}
      <div className="w-full pl-[30px] ">
        <div className="flex flex-col w-full  justify-between items-start mb-10 relative z-[1]">
          <h4
            className={`font-medium tracking-tight text-16 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h4>
          <p className="tracking-tight text-[14px] text-dimGray  relative z-[1] mt-10">
            {description}
          </p>

          {hasButton && (
            <Button
              backgroundColor="white"
              isSmall
              className="my-20"
              href={buttonHref}
            >
              {buttonText}
            </Button>
          )}

          <img
            src={img !== undefined ? img : prueba}
            className="w-full max-h-[300px] object-cover mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemMobile;
