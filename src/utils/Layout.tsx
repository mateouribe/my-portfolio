import React from "react";
import { ReactLenis } from "lenis/react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        duration: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default Layout;
