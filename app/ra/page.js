// app/ra/page.js
'use client'
import React from 'react'
import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'
import Link from 'next/link'

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 15,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}))

const RAListPage = () => {
  return (
    <Container maxWidth='md' style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant='h4' gutterBottom>
        Meet Your RAs!
      </Typography>
      <Grid container spacing={4}>
        {Array.from({ length: 16 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Avatar
              alt={`RA ${index + 1}`}
              src={`https://source.unsplash.com/random/100x100?sig=${index}`} // Placeholder image
              sx={{ width: 100, height: 100, margin: '0 auto 10px auto' }}
            />
            <Link href={`/ra/${index + 1}`}>
              <StyledButton>RA {index + 1}</StyledButton>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default RAListPage
