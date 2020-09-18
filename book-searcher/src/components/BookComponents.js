import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const Book = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .img-wrapper {
    min-width: 100px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  button {
    background-color: white;
    color: black;
    width: 150px;
    padding: 5px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      background: grey;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 3px;
    margin-top: 2px;
    margin-bottom: 2px;
    width: 100%;
  }
  button {
    background-color: white;
    color: black;
    width: 150px;
    padding: 5px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      background: grey;
    }
  }
  fieldset {
    display: flex;
    flex-direction: row;
  }
`;

export const ViewLink = styled.a`
  background-color: white;
  color: black;
  width: 100px;
  padding: 5px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background: grey;
  }
`;

export const Results = styled.div`
  padding: 10px;
`;
