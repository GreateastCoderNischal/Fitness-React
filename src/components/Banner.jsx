import React from 'react'
import {Button} from "@mui/material"
const Banner = () => {
  return (
    <>
      <div className='flex flex-col'>
        <span className='text-red-700 font-bold text-2xl'>Fitness Club</span>
        <h1 className='text-[40px] font-bold'>
          Sweet,Smile
          <br />
          And Repeat
        </h1>

        <div>

          Check out the most effective exercise personalized to you
        </div>
        <Button variant='contained' color="secondary" className='mt-10'
        sx={{
          marginY:'2.5rem',
        }}
        >
          Exercise
        </Button>
        <p className='font-bold text-[200px] opacity-[0.1] absolute pointer-events-none'>
          E X E R C I S E
        </p>
      <img src='assets/images/banner.png' 
      className='absolute w-[40vw] right-[-0] top-[-4vw]'/>
      </div>
    </>
  )
}

export default Banner