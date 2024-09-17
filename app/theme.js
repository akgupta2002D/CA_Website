// theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#006341', // Skidmore College green
      light: '#e0f2f1'
    },
    secondary: {
      main: '#FFD700', // A golden accent color
      light: '#fff8e1'
    }
  },
  typography: {
    fontFamily: 'Comic Sans MS, sans-serif' // Adds a fun font
  }
})

export default theme
