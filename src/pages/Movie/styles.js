import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    font-size: 25px;
    color: #303030;
    font-weight: bold;
    margin-bottom: 30px;
    transition: 0.4s;

    :hover {
      color: #7159c1;
    }
  }
`;

export const Label = styled.label`
  padding: 5px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const InputMovie = styled.input`
  margin-left: 10px;
  padding: 10px;
  border: 0;
  border-radius: 5px;
`;

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

  img {
    width: 100%;
    height: 100%;
  }
  
  p {
    margin: 20px 0 20px 0;
    font-size: 25px;
    color: #fff;
    font-weight: bold;
  }
`;