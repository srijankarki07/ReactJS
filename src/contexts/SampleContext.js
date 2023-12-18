import { createContext } from "react";
export const SampleContext = createContext();
const SampleProvider = ({ childern }) => {
  return (
    <SampleContext.Provider value={{ test: "Sample text" }}>
      {childern}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
