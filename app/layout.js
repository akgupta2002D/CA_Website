// app/layout.js
import './globals.css'
import ThemeProvider from './ThemeProvider'

export const metadata = {
  title: 'Reslife Blog',
  description: 'Reslife Blog for Jonsson & Wiecking RAs'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
