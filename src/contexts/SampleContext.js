import { createContext, useDeferredValue, useReducer } from "react";
export const SampleContext = createContext();

const sampleReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      state.test = action.payload;
      return state;
    default:
      return state;
  }
};

const SampleProvider = ({ childern }) => {
  const [sampleState, dispatch] = useReducer(sampleReducer, {
    test: "Sample Text",
  });
  return (
    <SampleContext.Provider value={{ test: "Sample text" }}>
      {childern}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
