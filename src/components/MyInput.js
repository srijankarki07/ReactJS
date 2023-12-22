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
    border: 2px solid red;
  }
`;
const MyInput = (label, id, error, ...restProps) => {
  return (
    <Div>
      <label htmlFor={id}>{label}</label>

      <input id={id} {...restProps} />
      {error && <span className="form-error">{error}</span>}
    </Div>
  );
};

export default MyInput;
