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

  const updateTest = (testValue) => {
    dispatch({
      type: "UPDATE_TEST",
      payload: testValue,
    });
  };
  return (
    <SampleContext.Provider value={{ sampleState, updateTest }}>
      {childern}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
