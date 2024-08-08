import React from "react";

export const SceneContext = React.createContext();

export const SceneProvider = ({ children }) => {
  const [chair, setChair] = React.useState(5);

  React.useEffect(() => {
    console.log(chair);
  }, [chair]);

  return (
    <SceneContext.Provider value={{ chair, setChair }}>
      {children}
    </SceneContext.Provider>
  );
};
