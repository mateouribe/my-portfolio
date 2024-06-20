import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxScreen600?: boolean;
};

const Wrapper = ({ className = "", children, maxScreen600 = false }: Props) => {
  return (
    <div
      className={`${className} w-full mx-auto ${
        maxScreen600
          ? "max-w-600 padding-section-y px-mobile md:px-0"
          : "max-w-screen-xl padding-section"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
