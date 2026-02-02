// Required imports

// Mui imports
import { Drawer, Box } from '@mui/material'

export function MobileSidebarComponent({ InputData, InputFunction}) {
	
	return (
		<Drawer anchor={'left'}
			open={InputData?.sidebarState}
			hideBackdrop={false}
			onClose={() => {
				InputFunction?.changeSidebatState(false)
			}}
			slotProps={{
				paper: {
					sx: {
						bgcolor: 'surface.a20',
						minWidth: '60px',
					}
				}
			}}
		>
			<Box sx={{  }}>
				This is the drawer
			</Box>
		</Drawer>
	)
}
