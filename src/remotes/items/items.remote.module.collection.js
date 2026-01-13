// Required imports
import CoreRemote from './../core.remote.collection.js'

// Required objects
const remote = new CoreRemote()

export default class ItemsRemote {

  // search items api
  async searchItems() {
    try {
      const apiEndpoint = '/items'
      const result = await remote?.CoreRemoteGetApi(apiEndpoint)
      return result
    } catch (err) {
      console.error(`HTTP REQUEST FAILED - SEARCH ITEMS - ERROR : ${err}`)
      throw err
    }
  }

}

