import prueba from "../../../assets/images/prueba.png";
import hexToRgba from "../../../utils/hexToRbg";
import Button from "../../customElements/button";

type Props = {
  title: string;
  description: string;
  className?: string;
  isTop?: boolean;
  color: string;
  img?: string;
  hasButton?: boolean;
};

const Item = ({
  title,
  description,
  className,
  isTop = false,
  color,
  img,
  hasButton = false,
}: Props) => {
  return (
    <div
      className={`w-auto h-[50vh] max-w-[600px] relative flex flex-col  ${className} ${
        isTop ? "justify-end pb-20" : "justify-start pt-20"
      }`}
    >
      <div
        className={`timeline-item-square absolute -left-[5px] w-20 h-20 rounded-[4px] bg-white border border-lightOrange z-[3] ${
          isTop ? "-bottom-[10px]" : "-top-[10px]"
        }`}
        style={{ borderColor: hexToRgba(color, 0.65) }}
      ></div>
      <div className="flex flex-row w-full bg-white justify-between items-center mb-10 relative z-[1]">
        <h4 className="font-medium tracking-tight text-[18px]">{title}</h4>
        {hasButton && (
          <Button backgroundColor="white" isSmall>
            visit study case
          </Button>
        )}
      </div>
      <p className="tracking-tight text-[14px] text-dimGray bg-white relative z-[1]">
        {description}
      </p>
      <img
        src={img !== undefined ? img : prueba}
        className={`absolute left-1/2 transform -translate-x-1/2 ${
          isTop ? "top-0" : "-bottom-10"
        }`}
      />
    </div>
  );
};

export default Item;
