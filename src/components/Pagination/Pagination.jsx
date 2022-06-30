import React from 'react';
<<<<<<< HEAD

import { Typography, Button } from '@mui/material';

import useStyles from './style';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant="contained" color="primary" type="button">
        Prev
=======
import { Typography, Button } from '@mui/material';

import useStyle from './styles';

const Pagination = () => {
  const classes = useStyle();

  const currentPage = 1;

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="contained" color="primary" type="button">
        PRev
>>>>>>> 0bccccdbd33d831ae4d6a68da54c4ea7fde873c0
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
<<<<<<< HEAD
      <Button onClick={handleNext} className={classes.button} variant="contained" color="primary" type="button">
=======
      <Button className={classes.button} variant="contained" color="primary" type="button">
>>>>>>> 0bccccdbd33d831ae4d6a68da54c4ea7fde873c0
        Next
      </Button>
    </div>
  );
};

export default Pagination;
