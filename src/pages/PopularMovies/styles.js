import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20px 0 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

   p {
    margin: 20px 0 20px 0;
    font-size: 25px;
    color: #fff;
    font-weight: bold;
  }

  a {
    margin: 20px 0 20px 0;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    font-size: 25px;
    color: #303030;
    font-weight: bold;
    transition: 0.4s;

    :hover {
      color: #7159c1;
    }
  }
`;

export const Cards = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 30px;
`;

export const Card = styled.div`
  p {
    margin: 20px 0 20px 0;
    font-size: 25px;
    color: #fff;
    font-weight: bold;
  }

  img {
    width: 80%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; 
`;
export const Span = styled.span`
  font-size: 20px;
  color: #303030;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  transition: 0.4s;
  font-weight: bold;

  :hover {
    color: #7159c1;
    cursor: pointer;
  }
`;