import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyle from './styles';

const Pagination = () => {
  const classes = useStyle();

  const currentPage = 1;

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="contained" color="primary" type="button">
        PRev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button className={classes.button} variant="contained" color="primary" type="button">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
