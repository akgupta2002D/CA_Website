// pages/index.js
import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import BlogPost from './blogComponents/BlogPost'

const posts = [
  {
    title: '🌟 Welcome to Jonsson and Wiecking! 🌟',
    content: `Hey everyone! We're super excited to kick off the semester in Jonsson and Wiecking Buildings. Get ready for some awesome events and a fantastic community! 🎉`,
    image: '/images/welcome.jpg'
  },
  {
    title: '🎬 Movie Night in the Lounge 🎬',
    content: `Join us this Friday for a movie night in the Jonsson lounge. Popcorn and snacks will be provided! Don't forget to bring your cozy blankets. 🍿`,
    image: '/images/movie-night.jpg'
  }
  // Add more posts here
]

const Home = () => {
  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <EmojiEmotionsIcon sx={{ mr: 2 }} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Reslife Blog - Jonsson & Wiecking RAs
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ padding: { xs: 2, md: 4 } }}>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            index={index}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
