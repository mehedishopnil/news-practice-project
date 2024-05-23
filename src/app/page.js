
import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
  <Grid item xs={8}>
    <h1>Latest News</h1>
    <LatestNews />
  </Grid>
  <Grid item xs={4}>
   <h1>SideBar</h1>
   <SideBar />
  </Grid>
  
</Grid>
    </div>
  );
};

export default HomePage;