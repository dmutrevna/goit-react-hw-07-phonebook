import styled from 'styled-components';

export const ContactItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
  padding: 8px;
  background-color: rgb(197, 248, 231);
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 400px;
`;

export const ContactIcon = styled.div`
  margin-right: 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
