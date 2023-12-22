import { forwardRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  label {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    border-radius: 5px;
    padding: 2px 10px;
    margin-bottom: 4px;
    border: ${({ error }) => (error ? "2px solid red" : "1px solid black")};
  }
`;
const MyInput = ({ label, id, error, ...restProps }, ref) => {
  return (
    <Div error={error}>
      <label htmlFor={id}>{label}</label>

      <input ref={ref} id={id} {...restProps} />
      {error && <span className="form-error">{error}</span>}
    </Div>
  );
};

export default forwardRef(MyInput);
