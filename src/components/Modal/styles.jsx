import styled from "styled-components";

export const Dialog = styled.dialog`
  width: 80%;
  max-width: 800px;
  padding: 32px 100px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`