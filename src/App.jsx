import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from "@mui/material";
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import ExerciseDetail from "./Pages/ExerciseDetail"
function App() {
  const [count, setCount] = useState(0)

  return (
 
      <BrowserRouter>
      <Box width="400px">

        <Navbar />
      </Box>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
