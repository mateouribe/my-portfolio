import React, { useLayoutEffect, useRef } from "react";
import { useStatesContext } from "../../../context/StatesProvider";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  backgroundColor?: "white" | "black";
  isSmall?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  isSmall = false,
  backgroundColor = "black",
  className,
  href,
  onClick,
}: Props) => {
  const { isDarkMode } = useStatesContext();
  const container = useRef<HTMLAnchorElement>(null);
  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });
      const tl = timeline.current;

      tl.to(".button-to-animate", {
        y: isSmall ? -2.5 : -5,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }, container);

    return () => ctx.revert();
  }, [container, isSmall]);

  return (
    <div>
      <a
        href={href}
        target="_blank"
        onClick={onClick}
        ref={container}
        onMouseEnter={() => {
          timeline?.current?.play();
        }}
        onMouseLeave={() => {
          timeline?.current?.reverse();
        }}
      >
        <div
          className={`inline-flex gap-8 rounded-12 px-20 cursor-alias shadow-sm button-to-animate ${
            isSmall ? "py-5" : "py-20 "
          } ${className} ${
            isDarkMode || backgroundColor === "white"
              ? " border-gainsboro border"
              : "bg-black"
          }`}
        >
          <span
            className={`flex leading-none text-inherit select-none ${
              isDarkMode
                ? "text-white"
                : backgroundColor === "white"
                ? " text-black"
                : "text-white"
            } ${isSmall ? "text-14" : "text-18 font-semibold "}`}
          >
            {children}
          </span>
          {!isSmall && (
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9.64655C0 10.359 0.577648 10.9367 1.29011 10.9367H16.5188C14.9474 12.9227 13.0585 14.6332 10.8803 16.0267L9.94812 16.6231C9.34796 17.007 9.17267 17.8049 9.55661 18.405C9.80292 18.7899 10.2193 19 10.6447 19C10.8826 19 11.1234 18.9342 11.3387 18.7964L12.2708 18.2002C15.1416 16.3636 17.5686 14.0344 19.484 11.2772C20.172 10.2866 20.172 9.00656 19.484 8.01598C17.5686 5.25875 15.1416 2.92955 12.2708 1.09297L11.3387 0.496749C10.7384 0.11265 9.94071 0.288073 9.55661 0.888104C9.17267 1.48826 9.34793 2.2861 9.94812 2.67004L10.8803 3.26659C13.0585 4.65991 14.9474 6.37044 16.5188 8.35644H1.29011C0.577648 8.35644 0 8.93409 0 9.64655Z"
                fill={
                  isDarkMode
                    ? "#FFFFFF"
                    : backgroundColor === "white"
                    ? "#1A1A1A"
                    : "#FFFFFF"
                }
              />
            </svg>
          )}
        </div>
      </a>
    </div>
  );
};

export default Button;
