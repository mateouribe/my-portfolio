import React, { createContext, useContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type States = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultStates: States = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

const StatesContext = createContext<States>(defaultStates);

const StatesProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <StatesContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => useContext(StatesContext);

export default StatesProvider;
