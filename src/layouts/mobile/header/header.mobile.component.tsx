// Required imports
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

// Mui imports
import { Box, IconButton } from '@mui/material'


export function MobileHeaderComponent({ InputData, InputFunction }) {
	
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
	
	return (
		<Box sx={{ px: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minHeight: '60px', bgcolor: 'surface.a20', transition: 'background-color 0.4s ease-in-out' }}>
			<IconButton
				onClick={() => {
					InputFunction?.changeSidebatState(!InputData?.sidebarState)
				}}
			>
				<span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'primary.a60' }}>{ InputData?.sidebarState ? 'menu_open' : 'menu' }</span>
			</IconButton>
			<IconButton
				onClick={() => {
					setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
				}}
			>
				<span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'primary.a60' }}>routine</span>
			</IconButton>
		</Box>
	)
}
