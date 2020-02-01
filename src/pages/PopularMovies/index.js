import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import token from '../../config/token';

import { Container, Card, Cards, Header, Pagination, Span } from './styles';

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPopularMovies() {
      const pageNumber = page > 0 ? page : 1;

      const response = await api.post('/movies/popular', { page: pageNumber }, {
        headers: {
          Authorization: token,
        }
      });

      if(response.data) return setPopularMovies(response.data.results);

      return;
    };

    loadPopularMovies();
  }, [page])

  async function handleChangePage(page) {
    if (page === 0) return;

    const response = await api.post(`/movies/popular`, { page }, {
      headers: {
        Authorization: token,
      },
    });

    setPage(page);

    if(response.data) return setPopularMovies(response.data.results);

    return;
  };


  return (
    <Container>
      <Header>
        <p>POPULAR MOVIES</p>
        <Link to="/movie">SEARCH PAGE</Link>
      </Header>

      <Pagination>
        <Span onClick={() => handleChangePage(page - 1)}> Back </Span>
        <Span onClick={() => handleChangePage(page + 1)}> Next </Span>
      </Pagination>

      <Cards>
        {popularMovies.map(movie => (
          <Card>
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              />
          </Card>
        ))}
      </Cards>
    </Container>
  );
}
