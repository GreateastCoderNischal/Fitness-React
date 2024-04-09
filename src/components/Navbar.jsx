import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from "@mui/material"
function Navbar() {
    return (
        <Stack className='font-main justify-between items-center p-2 ' direction="row" 

        >
            <Link to="/" style={{
                textDecoration:'none'
            }}>
                <img src="assets/images/Logo.png"/>
            </Link>
            <Stack direction={'row'} className='gap-3 text-black'>
                <Link to="/" className='no-underline text-black'>
                    Home
                </Link>
                <Link to="/" className='no-underline text-black'>
                    Exercises
                </Link>
                </Stack>
        </Stack>
    )
}

export default Navbar