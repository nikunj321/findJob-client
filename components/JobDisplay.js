import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'

function JobDisplay(props) {
    return (
        <Box p={16} bg="gray.100">
            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                {
                    props.children
                }
            </Grid>
        </Box>
    )
}

export default JobDisplay
