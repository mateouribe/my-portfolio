import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxScreen600?: boolean;
};

const Wrapper = ({ className = "", children, maxScreen600 = false }: Props) => {
  return (
    <div
      className={`${className} bg-red-100 p-mobile md:p-tablet lg:p-desktop w-full mx-auto ${
        maxScreen600 ? "max-w-600" : "max-w-screen-xl"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
