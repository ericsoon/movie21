import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorHookQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import useStyle from './style';
import { MovieList, Pagination } from '..';

const Actors = () => {
  const { id } = useParams();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetActorHookQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  const classes = useStyle();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Go back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={classes.bioContainer}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'Sorry, there is no biography yet'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button target="_blank" rel="noopener noreferrer" variant="contained" color="primary" href={`http://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
              <Typography component={Link} to="/" color="inherit" variant="subtitle2" style={{ textDecoration: 'none' }}>
                Back
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {/* Loop through the recomended movies ... */}
        {movies
          ? <MovieList movies={movies} numberOfMovies={12} />
          : <Box> Sorry, nothing was found </Box>}
        <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
      </Box>
    </>
  );
};

export default Actors;
