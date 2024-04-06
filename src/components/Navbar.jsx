import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from "@mui/material"
function Navbar() {
    return (
        <Stack className='font-main justify-between items-center p-2' direction="row" 

        >
            <Link to="/" style={{
                textDecoration:'none'
            }}>
                <h1 className='font-bold font-main text-green-600'>Gym App</h1>
            </Link>
            <Stack direction={'row'} className=''>
                <Link to="/" className='no-underline'>
                    Home
                </Link>
                </Stack>
        </Stack>
    )
}

export default Navbar