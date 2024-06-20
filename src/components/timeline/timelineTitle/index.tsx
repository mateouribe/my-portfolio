import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  title: string;
  color: string;
  lightColor: string;
  veryLightColor: string;
  isMobile?: boolean;
};

const TimelineTitle = ({
  children,
  title,
  color,
  lightColor,
  veryLightColor,
  isMobile = false,
}: Props) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container}>
      <div className="w-[160px] h-[160px] relative">
        <div
          className="rounded-20 flex flex-col items-center justify-center relative z-[3] w-[160px] h-[160px]"
          style={{
            backgroundColor: lightColor,
          }}
        >
          {children}
          <h2
            className="font-medium text-20 max-w-[60%] text-center leading-tight tracking-tight"
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
        <div
          className="absolute-centered h-[200px] w-[200px] rounded-20 z-[2]"
          style={{
            backgroundColor: veryLightColor,
          }}
        ></div>
        <div
          className={`absolute-centered h-[200px] w-[200px] rounded-20 z-[1] opacity-70 ${
            isMobile ? "square-to-animate-mobile" : "square-to-animate"
          }`}
          style={{
            backgroundColor: veryLightColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimelineTitle;
