import React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '380px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    overflow: 'hidden',
    borderRadius: '30px'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to left, #701A75, #701A75, #1E40AF, #1E40AF)',
    opacity: 0.7,
    zIndex: 1
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: 2,
    padding: '2rem',
    backgroundColor: '#000',
    opacity: 0.3
  }
}

const VideoComponent = ({ videoSrc, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  return (
    <Box sx={styles.container}>
      <video
        src={videoSrc}
        muted
        loop
        autoPlay={isPlaying}
        controls={!autoPlay && isPlaying} 
        style={styles.video}
      />

      {!isPlaying && <Box sx={styles.overlay} />}

      {!isPlaying && (
        <IconButton
          color="primary"
          onClick={() => setIsPlaying(true)}
          sx={styles.playButton}
        >
          <PlayArrowOutlinedIcon
            sx={{ fontSize: '80px', color: '#FFFFFF', borderRadius: '50%' }}
          />
        </IconButton>
      )}
    </Box>
  )
}

export default VideoComponent
