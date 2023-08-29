import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  margin: 0 auto;
  width: 410px;
`;

export const FilterLabel = styled.p`
  margin-right: 38px;
  font-size: 16px;
  text-align: center;
`;

export const FilterInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: rgb(197, 248, 231);
  }
`;
