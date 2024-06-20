import React from "react";
import { Tooltip } from "react-tooltip";

type Props = {
  tooltip: string;
  children: React.ReactNode;
};

const Icon = ({ tooltip, children }: Props) => {
  return (
    <div
      className="w-[150px] h-[150px] rounded-20 mr-20 shadow-sm"
      id={`${tooltip}_icon`}
    >
      {children}
      <Tooltip
        anchorSelect={`#${tooltip}_icon`}
        content={tooltip}
        style={{
          borderRadius: "12px",
          background: "rgba(0, 0, 0, 0.30)",
          backdropFilter: "blur(4.5px)",
        }}
      />
    </div>
  );
};

export default Icon;
