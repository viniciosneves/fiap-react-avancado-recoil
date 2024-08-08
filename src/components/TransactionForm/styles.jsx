import styled from "styled-components";

export const Card = styled.div`
  background-color: #CBCBCB;
  border-radius: 8px;
  min-height: 400px;
  width: 100%;
  background-image: url('/imgs/pattern.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto;
  padding: 32px;
`;

export const Heading = styled.h2`
  color: #DEE9EA;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
  margin-bottom: 32px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: baseline;
`

export const Select = styled.select`
  min-width: 355px;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #004D61;
  color: #444444;
`

export const Label = styled.label`
  display: block;
  color: #DEE9EA;
  font-size: 16px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  min-width: 250px;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  color: #444444;
  border: 1px solid #004D61;
`