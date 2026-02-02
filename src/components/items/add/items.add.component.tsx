// Required imports

// Mui imports
import { Drawer, Box } from '@mui/material'

export function AddItemComponent({ InputData, InputFunction }) {
	
	return (
		<Drawer
			open={InputData?.isOpen}
			anchor='bottom'
			onClose={() => {
				InputFunction?.handleDrawerState(false)
			}}
		>
			This is the add component
		</Drawer>
	)
}
