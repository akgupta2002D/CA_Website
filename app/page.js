// app/page.js
import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import BlogPost from './blogComponents/BlogPost'
import { getPosts } from './blogLib/getPosts'

export default function Home () {
  const posts = getPosts() // Call getPosts directly in the component

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
            image={`/${post.image}`} // Prefix with slash to use public path
          />
        ))}
      </Container>
    </>
  )
}
