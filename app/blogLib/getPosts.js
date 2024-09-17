// lib/getPosts.js
import fs from 'fs'
import path from 'path'

export function getPosts () {
  const filePath = path.join(process.cwd(), 'public', 'posts.txt')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Normalize line endings and split content into posts by double newlines
  const rawPosts = fileContent
    .replace(/\r\n/g, '\n')
    .split('\n\n')
    .filter(post => post.trim() !== '')

  // Parse each post into an object
  const posts = rawPosts.map(post => {
    // Split each post by single newlines
    const [title, content, image] = post.split('\n').map(line => line.trim())
    return { title, content, image }
  })

  return posts
}
