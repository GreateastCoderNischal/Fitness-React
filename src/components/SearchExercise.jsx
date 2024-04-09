import React from 'react'
import { useEffect, useState } from 'react';
import { Box, Stack, Button, TextField, Typography } from "@mui/material"
import { exerciseAPI } from '../Api/FetchData';
import Exercise from './Exercise';
const SearchExercise = () => {
    const [search, setSearch] = useState('');
    const [exercise, setExercise] = useState(['back','abs'])
    const handleSearch = async () => {
        if (search.length > 0) {

            setExercise(prev=>[...prev,search]);
        }
    }



    return (
        <>
            <Stack alignItems="center" mt="37px"
                justifyContent="center" p={'20px'}>
                <h1 className='font-bold mb-[20px] text-center'>Awesome Exercise You
                    <br />
                    Should Know
                </h1>
                <Box position="relative" sx={{
                    display: 'flex',
                }}
                    flexDirection={'row'}
                    width={'100%'}>
                    <TextField
                        height="70px"
                        value={search}
                        placeholder='Search Exercise'
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            input: {
                                fontWeight: '700',
                                border: 'none',
                                borderRadius: '40px',

                            },
                            width: '95%'
                        }}
                    />
                    <Button variant="contained"
                        sx={{
                            bgcolor: '#FF2625',
                            color: 'white',
                        }}
                        onClick={handleSearch}
                    >Search</Button>
                </Box>
            </Stack>
            <Exercise exercise={exercise}/>
        </>
            )
    }

export default SearchExercise
