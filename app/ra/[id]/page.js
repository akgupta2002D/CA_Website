// app/ra/[id]/page.js
import React from 'react'
import { Container, Typography } from '@mui/material'

// The params object is passed directly as a prop
const RAProfilePage = ({ params }) => {
  const { id } = params // Get the id from params

  return (
    <Container maxWidth='sm' style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant='h4' gutterBottom>
        RA Profile {id}
      </Typography>
      <Typography variant='body1'>
        This is where the profile details for RA {id} would go.
      </Typography>
    </Container>
  )
}

export default RAProfilePage
