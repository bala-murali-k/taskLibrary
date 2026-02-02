// Required imports
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

export default function ListItemsComponent ({ InputData }) {

	const mockData = [
		{
			"item_id": 4,
			"created_at": "2026-01-02T18:06:03.626+00:00",
			"modifiled_at": null,
			"title": "First Ever Api Hit",
			"description": "This is the first hit of the custom api with only title and description",
			"display_title": null,
			"content": null,
			"is_active": true,
			"is_deleted": false,
			"item_metadata": null,
			"created_by": 1,
			"modified_by": null
		}
	]

	return (
		<Grid container>
			{
				InputData?.loading ?
					<Box>
						Loading
					</Box> :
					// Array?.isArray(InputData?.data) && InputData?.data?.length > 0 ?
					mockData?.length > 0 ?
					<Box sx={{ bgcolor: 'red', width: 'inherit', height: 'calc(100vh - 92%)' }}>
						{
							mockData?.map((itemData, index) => (
							  <Card key={`itemID: ${index}`}>
								<CardContent>
								  <Typography variant='subtitle1'>
									{itemData?.title ? itemData?.title : ''}
								  </Typography>
								</CardContent>
							  </Card>
							))
						}
					</Box> :
					<Box>
						No data in this array
					</Box>
			}
		</Grid>
  )
}


