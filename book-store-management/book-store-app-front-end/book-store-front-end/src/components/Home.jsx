import { Typography, Box } from '@mui/material'
import React from 'react'


const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
    <Typography sx={{fontFamily: "fantasy"}} variant="h2">THIS IS CRUD APPLICATION</Typography>
    <Typography sx={{fontFamily: "fantasy"}} variant='h3'>BY MERN STACK</Typography>
      </Box>
    </div>
  )}
export default Home