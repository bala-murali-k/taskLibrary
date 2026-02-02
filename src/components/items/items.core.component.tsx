// Required imports
import { useState, useEffect } from 'react'

// Mui imports
import { Box, IconButton } from '@mui/material'

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

  // Side effects
  // useEffect(() => {
  //   searchItems()
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
					<span className="material-symbols-outlined" style={{ fontSize: '25px', color: 'primary.a60' }}>add</span>
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
					}}
				/>
			}
		</Box>
	  )
}

