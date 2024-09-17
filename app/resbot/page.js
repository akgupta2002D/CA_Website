'use client'

import { Box } from '@mui/material'
import ChatInterface from '../components/ChatInterface'
import { useState } from 'react'

export default function ResBot () {
  const [selectedSession, setSelectedSession] = useState(null)

  const handleSessionSelect = session => {
    setSelectedSession(session)
  }

  const handleNewSession = (sessionId, firstMessage) => {
    setSelectedSession({
      id: sessionId,
      messages: [{ role: 'user', content: firstMessage }]
    })
  }

  return (
    <Box
      component='section'
      display='flex'
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        height: '100vh'
      }}
    >
      <Box
        sx={{
          flexGrow: { xs: '1', sm: '1' }
        }}
      >
        <ChatInterface
          session={selectedSession}
          onNewSession={handleNewSession}
        />
      </Box>
    </Box>
  )
}
