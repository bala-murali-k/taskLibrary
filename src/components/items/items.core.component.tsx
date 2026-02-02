// Required imports
import { useState, useEffect } from 'react'

// Mui imports
import { Box, IconButton, Snackbar } from '@mui/material'

// Component imports
import ListItemsComponent from './list/items.list.component.tsx'
import { AddItemComponent } from './add/items.add.component.tsx'

// Remote imports
import ItemsRemote from './../../remotes/items/items.remote.module.collection.js'

// Required objects
const itemRemote = new ItemsRemote()

export default function ItemsCoreComponent ({}) {

	// State variables
	const [items, setItems] = useState<any>({
		data: [],
		loading: false,
	})
	const [addItems, setAddItems] = useState<boolean>(false)
	const [addLoading, setAddLoading] = useState<boolen>(false)
	const [addSnackbar, setAddSnackbar] = useState<any>({
		state: null,
		message: null,
	})

	// Side effects
	// useEffect(() => {
	// 	searchItems()
	// 	addItem()
	// }, [])

	// Functions
	async function searchItems() {
		setItems((prev) => ({ ...prev, loading: true }))
		let itemsResponse: any
		try {
			itemsResponse = await itemRemote?.searchItems()
			// if (itemsResponse?.status !== 200) {
			//   const recievedError = new Error(itemsResponse?.message)
			//   recievedError['status'] = itemsResponse?.status
			//   throw recievedError
			// }
			if (!Boolean(itemsResponse)) {
			return
		}
		setItems((prev) => ({ ...prev, data: itemsResponse }))
		} catch (err) {
			console.error(`HTTP REQUEST FAILED - SEARCH ITEMS - CORE - ERROR : ${err}`)
		} finally {
			setItems((prev) => ({ ...prev, loading: false }))
		}
	}
	
	async function addItem(data) {
		setAddLoading(true)
		try {
			const inputData = {
				title: data?.title ?? undefined,
				description: data?.description ?? undefined,
				content: JSON.stringify({ 'data': data?.content })
			}
			console.log('EEEEEEEEEEeeeeeee ', inputData)
			const addResponse = await itemRemote?.addItems(inputData)
			if (addResponse?.status !== 200) {
				const recievedError = new Error(itemsResponse?.message)
				recievedError['status'] = itemsResponse?.status
				throw recievedError
			}
			setAddSnackbar(prev => ({ open: true, status: addResponse?.status, message: 'Item added successfully' }))
			setTimeout(() => {
				setAddSnackbar(prev => ({ open: false, status: null, message: null }))
			}, 3000)
		} catch (err) {
			console.error(`HTTP REQUEST FAILED - ADD ITEMS - CORE - ERROR : ${err}`)
			setAddSnackbar(prev => ({ status: err?.status, message: err?.message }))
			setTimeout(() => {
				setAddSnackbar(prev => ({ open: false, status: null, message: null }))
			}, 3000)
			throw err
		} finally {
			setAddLoading(false)
		}
	}

	return (
		<Box sx={{ position: 'relative', height: 'calc(100vh - 60px)' }}>
			<ListItemsComponent
				InputData={{
					data: items?.data,
					loading: items?.loading,
				}}
			/>
			<Box sx={{ pr: 3, pb: 3, position: 'absolute', bottom: 0, right: 0 }}>
				<IconButton
					onClick={() => {setAddItems(prev => !prev)}}
				>
					<span className="material-symbols-outlined" style={{ fontSize: '25px', color: 'tonal.main' }}>add</span>
				</IconButton>
			</Box>
			{
				addItems &&
				<AddItemComponent
					InputData={{
						isOpen: addItems,
					}}
					InputFunction={{
						handleDrawerState: (state) => { setAddItems(state) },
						handleAddItem: (data) => { addItem(data) },
					}}
				/>
			}
			{
				addSnackbar?.open &&
				<Snackbar
					anchorOrigin={'bottom-center'}
					open={addSnackbar?.open}
					message={addSnackbar?.message}
				/>
			}
		</Box>
	  )
}

