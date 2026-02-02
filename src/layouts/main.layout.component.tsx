// Required imports
import { useContext } from 'react'
import { ThemeContext } from './../context/theme/theme.context.component.tsx'
import { Outlet } from 'react-router-dom'
import { getBreakpoint } from '../utils/helperFunctions.ts'

// Mui imports
import { useTheme, Box, Tooltip, Stack, IconButton, Typography } from '@mui/material'

// Core components
import { CoreMoblieLayoutComponent } from './mobile/core.layout.mobile.component.tsx'

// Required objects

export default function MainLayout ({}) {
	
	const theme = useTheme()
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
	const deviceType = getBreakpoint()
	
	return (
		<Box>
			{
				(deviceType?.toLowerCase() === 'mobile' || deviceType?.toLowerCase() === 'tablet') ?
				<Box sx={{ width: '100vw', height: '100vh' }}>
					<CoreMoblieLayoutComponent>
						<Outlet />
					</CoreMoblieLayoutComponent>
				</Box> :
				<Box sx={{ width: '100vw', height: '100vh' }}>
					<Box sx={{ width: '100%', height: '8%', boxShadow: 3, display: 'flex', alignItems: 'center' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<span className="material-symbols-outlined">book_4</span>
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
							<span className="material-symbols-outlined">browse</span>
						</IconButton>
					</Tooltip>
					</Stack>
					<Box sx={{ width: '97%' }}>
						<Outlet />
					</Box>
				  </Box>
				</Box>
			}
		</Box>
	)
}
