// Required imports
import { Box, Tooltip, Stack, IconButton, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function MainLayout ({}) {

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ width: '100%', height: '8%', boxShadow: 3, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span class="material-symbols-outlined">book_4</span>
          <Typography>
            Task Library
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: '92%', display: 'flex' }}>
        <Stack sx={{ width: '3%', boxShadow: 3 }}>
          <Tooltip title='Items' placement='right-start' arrow>
            <IconButton
              sx={{ my: 0.5 }}
              onClick={() => {
              }}
            >
                <span class="material-symbols-outlined">browse</span>
            </IconButton>
          </Tooltip>
        </Stack>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
