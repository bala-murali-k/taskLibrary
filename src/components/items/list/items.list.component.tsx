// Required imports
import { Box, Typography } from '@mui/material'

export default function ListItemsComponent ({ InputData }) {

  return (
    <Box>
      {
        InputData?.loading ?
          <Box>
            Loading
          </Box> :
          Array?.isArray(InputData?.data) && InputData?.data?.length > 0 ?
          InputData?.data?.map((itemData, index) => (
            <Box key={`itemID: ${index}`}>
              <Typography>
                {itemData?.title ? itemData?.title : ''}
              </Typography>
            </Box>
          )) :
            <Box>
              No data in this array
            </Box>
      }
    </Box>
  )
}


