import React from 'react'
import {useState} from 'react';
import {Box} from "@mui/material";
import Banner from '../components/Banner';
import SearchExercise from '../components/SearchExercise';
const Home = () => {
  return (
    <>
    <Box className=" p-4 h-[80vh] w-[95vw] flex items-center font-main relative"
    sx={{
      marginBottom:'12vw',
    }}
    >
      <Banner/>
        </Box>
        <div className='w-full'>

      <SearchExercise/>
        </div>
    </>
    )
}

export default Home