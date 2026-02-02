// Required imports
import { useState } from 'react'

// Mui imports
import { Box } from '@mui/material'

// Component imports
import { MobileHeaderComponent } from './header/header.mobile.component.tsx'
import { MobileSidebarComponent } from './sidebar/sidebar.mobile.component.tsx'

export function CoreMoblieLayoutComponent({ children }) {
	
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
	
	return (
		<Box>
			<Box >
				<MobileHeaderComponent
					InputData={{
						sidebarState: isSidebarOpen
					}}
					InputFunction={{
						changeSidebatState: (state) => { setIsSidebarOpen(state) },
					}}
				/>
			</Box>
			<Box>
				{children}
			</Box>
			<MobileSidebarComponent
				InputData={{
					sidebarState: isSidebarOpen
				}}
				InputFunction={{
					changeSidebatState: (state) => { setIsSidebarOpen(state) },
				}}
			/>
		</Box>
	)
}
