import { useContext, createContext, useReducer } from "react";
export const SampleContext = createContext();

const sampleReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      state.test = action.payload;
      //   localStorage.setItem("test", action.payload);
      localStorage.setItem(
        "testObject",
        JSON.stringify({ name: "test", date: "today" })
      );
      return state;
    default:
      return state;
  }
};

const SampleProvider = ({ children }) => {
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
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
export const useSample = () => useContext(SampleContext);
