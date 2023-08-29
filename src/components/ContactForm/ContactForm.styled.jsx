import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #f7f7f7;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitlePhone = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 30px;
  padding-top: 10px;
  color: rgb(29, 30, 30);
  text-transform: uppercase;
  text-shadow: 10px 10px 10px rgba(197, 248, 231, 0.9);
`;

export const TitleContacts = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  padding-bottom: 4px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

  h2 {
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: rgb(197, 248, 231);
    }
  }

  button {
    width: 150px;
    padding: 8px 12px;
    font-size: 16px;
    background-color: rgb(197, 248, 231);
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    margin: auto;

    &:hover {
      background-color: rgb(173, 245, 221);
      transform: scale(1.1);
    }
  }
`;
