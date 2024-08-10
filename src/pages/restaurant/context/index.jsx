import React from "react";

export const SceneContext = React.createContext();

export const SceneProvider = ({ children }) => {
  const [chair, setChair] = React.useState(5);
  return (
    <SceneContext.Provider value={{ chair, setChair }}>
      {children}
    </SceneContext.Provider>
  );
};
