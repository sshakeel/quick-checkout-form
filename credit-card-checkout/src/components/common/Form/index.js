// Cotains a collection of form specific components
// This can also be expanded into a full blown Form component as needed

import styled from 'styled-components';

import { clearfix } from '../styledComponents';

export const FieldLabel = styled.label`
  color: #666;
  display: block;
  font-size: 0.9em;
  padding-bottom: 5px;
  padding-left: 10px;
`;

export const FieldValidationMessage = styled.p`
  color: #e00;
  font-size: 0.85em;
  padding-left: 10px;
`;

export const FormField = styled.input`
  border-color: #ccc;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: inherit;
  font-size: inherit;
  height: 45px;
  outline: 0;
  padding: 10px;
  width: 100%;
  &:focus {
    border-color: #0f72e5;
  }
  &::placeholder {
    color: #AAA;
  }
`;

export const FormFieldRow = styled.div`
  margin-bottom: 20px;
  ${clearfix}
`;

export const SubmitButton = styled.button`
  background: #0f72e5;
  border: 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: inherit;
  height: 50px;
  margin-top: 30px;
  width: 100%;
`;
