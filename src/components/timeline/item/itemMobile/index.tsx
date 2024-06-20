import hexToRgba from "../../../../utils/hexToRbg";
import Button from "../../../customElements/button";
import prueba from "../../../../assets/images/prueba.png";

type Props = {
  title: string;
  description: string;
  className?: string;
  color: string;
  img?: string;
  hasButton?: boolean;
};

const ItemMobile = ({
  title,
  description,
  className,
  color,
  img,
  hasButton = false,
}: Props) => {
  return (
    <div className={`${className} w-full flex flex-col relative`}>
      {/* Circle */}
      <div
        className={`absolute w-20 h-20 rounded-[4px] bg-white border z-[3] top-0 -left-[10px] timeline-item-square-mobile`}
        style={{ borderColor: hexToRgba(color, 0.65) }}
      ></div>

      {/* Content */}
      <div className="w-full pl-[30px] ">
        <div className="flex flex-col w-full bg-white justify-between items-start mb-10 relative z-[1]">
          <h4 className="font-medium tracking-tight text-16">{title}</h4>
          <p className="tracking-tight text-[14px] text-dimGray bg-white relative z-[1] mt-10">
            {description}
          </p>

          {hasButton && (
            <Button backgroundColor="white" isSmall className="my-20">
              visit study case
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
