import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Label, InputMovie, Card } from './styles';

export default function Movie() {
  const [movie, setMovie] = useState({});

  async function loadMovie(id) {
      const response = await api.get(`/movie/${id}`, {
        headers: {
          Authorization: process.env.TOKEN,
        }
      });

      if(response.data) return setMovie(response.data);

      return  ;
  };

  return (
      <Container>
        <Link to="/popular-movies">BACK TO HOME</Link>
        <Label>Movie ID</Label>
        <InputMovie onChange={e => loadMovie(e.target.value)} />

        <Card>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="" />
        </Card>
      </Container>
  );
}
