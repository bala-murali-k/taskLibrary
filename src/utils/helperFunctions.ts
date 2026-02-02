// Required imports

// Mui imports
import { useTheme, useMediaQuery } from '@mui/material'

// Component imports

// Necessary variables

export function getBreakpoint() {
	
	const theme = useTheme()
	
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
	
	if (isMobile) return 'mobile'
	else if (isTablet) return 'tablet'
	else if (isDesktop) return 'desktop'
	return 'unknown'

}
