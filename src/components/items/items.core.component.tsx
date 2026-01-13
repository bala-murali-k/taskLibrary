// Required imports
import { useState, useEffect } from 'react'

// Component imports
import ListItemsComponent from './list/items.list.component.tsx'

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

  // Side effects
  useEffect(() => {
    searchItems()
  }, [])

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
    <>
      <ListItemsComponent
        InputData={{
          data: items?.data,
          loading: items?.loading,
        }}
      />
    </>
  )
}

