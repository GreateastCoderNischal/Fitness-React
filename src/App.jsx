import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from "@mui/material";
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import ExerciseDetail from "./Pages/ExerciseDetail"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="400px">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
