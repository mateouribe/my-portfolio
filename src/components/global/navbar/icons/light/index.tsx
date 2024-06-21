type Props = {
  fill?: string;
};

const Light = ({ fill = "#1A1A1A" }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.49412 0 0 4.49412 0 10C0 15.5059 4.49412 20 10 20C15.5059 20 20 15.5059 20 10C20 4.49412 15.5059 0 10 0ZM10 14L10 18.3333C5.74118 18.3333 1.66667 14.2353 1.66667 10C1.66667 5.76471 5.74118 1.66667 10 1.66667L10 6C12.2118 6 14 7.78824 14 10C14 12.2118 12.2118 14 10 14Z"
        fill={fill}
      />
      <path
        d="M10 13.0824V6.91765V6C7.78824 6 6 7.78824 6 10C6 12.2118 7.78824 14 10 14V13.0824Z"
        fill={fill}
      />
    </svg>
  );
};

export default Light;
