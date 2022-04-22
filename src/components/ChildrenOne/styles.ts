import styled from "styled-components";

export const Container = styled.div`
  height: 230px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 3px solid greenyellow;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  h2 {
    margin: 5px;
  }
  input {
    width: 80%;
    height: 20px;
    margin: 10px;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    border: 1px solid silver;
    span {
      margin: 5px;
    }
  }
  button {
    display: block;
    width: 80%;
    height: 30px;
    border: none;
    cursor: pointer;
    background: purple;
    color: white;
    margin: 20px 0;
  }
`;
