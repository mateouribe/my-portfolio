import React from "react";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color: string;
};

const HighlightText = ({ color, size = "large", children }: Props) => {
  return (
    <span
      style={{
        color: color,
        backgroundColor: `${color}20`,
        borderColor: color,
      }}
      className={`${
        size === "small"
          ? "text-14 rounded-full flex flex-row items-center gap-8 max-w-fit justify-center px-10 py-5 border mb-30"
          : size === "medium"
          ? ""
          : "rounded-6 inline-block px-10 pb-5"
      }`}
    >
      {children}
    </span>
  );
};

export default HighlightText;
