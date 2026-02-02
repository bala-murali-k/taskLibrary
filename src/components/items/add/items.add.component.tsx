// Required imports
import { useState, useEffect } from 'react'

// Mui imports
import { Drawer, Button, Typography, Box, OutlinedInput, TextareaAutosize } from '@mui/material'

export function AddItemComponent({ InputData, InputFunction }) {
	
	const defaultFormValues = {
		title: '',
		description: '',
		content: '',
	}
	const [formData, setFormData] = useState(defaultFormValues)
	
	return (
		<Drawer
			open={InputData?.isOpen}
			anchor='bottom'
			hideBackdrop={true}
			onClose={() => {
				InputFunction?.handleDrawerState(false)
			}}
			slotProps={{
				paper: {
					sx: {
						minHeight: '180px',
						borderTopRightRadius: '20px',
						borderTopLeftRadius: '20px',
						p: 4
					}
				}
			}}
		>
			<Typography variant='body1' sx={{ mb: 2 }}>Item Info</Typography>
			<Typography variant='subtitle1' sx={{ fontSize: '13px', color: 'primary.a30' }}>Title</Typography>
			<OutlinedInput
				id='title-standard'
				value={formData?.title || ''}
				onChange={(event) => {
					setFormData((prev) => ({ ...prev, title: event?.target?.value || '' }))
				}}
			/>
			<Typography variant='subtitle1' sx={{ fontSize: '13px', color: 'primary.a30', mt: 4 }}>Description</Typography>
			<TextareaAutosize
				minRows={6}
				maxRows={8}
				aria-label="maximum height"
				value={formData?.description}
				onChange={(event) => {
					setFormData((prev) => ({ ...prev, description: event?.target?.value || '' }))
				}}
			/>
			<Typography variant='subtitle1' sx={{ fontSize: '13px', color: 'primary.a30', mt: 4 }}>Content</Typography>
			<TextareaAutosize
				minRows={16}
				maxRows={28}
				aria-label="maximum height"
				value={formData?.content}
				onChange={(event) => {
					setFormData((prev) => ({ ...prev, content: event?.target?.value || '' }))
				}}
			/>
			<Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Button
					onClick={() => {
						InputFunction?.handleAddItem(formData)
					}}
				>
					Add
				</Button>
				<Button
					onClick={() => {
						InputFunction?.handleDrawerState(false)
					}}
				>
					Cancel
				</Button>
			</Box>
		</Drawer>
	)
}
