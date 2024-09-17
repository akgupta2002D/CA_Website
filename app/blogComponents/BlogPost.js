// components/BlogPost.js
import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const BlogPost = ({ title, content, image, index }) => {
  const isEven = index % 2 === 0

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginBottom: 0,
        alignItems: 'stretch',
        '&:hover': {
          backgroundColor: '#f0f0f0'
        }
      }}
      direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }} // Responsive direction
    >
      <Grid item xs={12} md={5}>
        <Box
          component='img'
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: { xs: '200px', md: '250px' }, // Responsive height
            objectFit: 'cover',
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          padding: 2,
          maxHeight: { xs: 'none', md: '250px' }, // Remove height limit on small screens
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: isEven ? 'secondary.light' : 'primary.light',
          transition: 'background-color 0.5s'
        }}
      >
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body1'>{content}</Typography>
      </Grid>
    </Grid>
  )
}

export default BlogPost
