import { Popover, PopoverTrigger, PopoverContent, Grid, Box, Button, Text } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import CategoryList from './CategoryList'


function JobCategories() {
    return (
        <Box>
            <Popover trigger="hover" placement="bottom-start">
                <PopoverTrigger>
                    <Button variant="link" leftIcon={<FaBars color="white" />} fontSize="16px" pt={4} color="white">categories</Button>
                </PopoverTrigger>
                <PopoverContent bg="gray.100" width="auto">
                    <Grid templateColumns="repeat(4, 1fr)" gap={2} color="gray.700" p={2}>
                        <CategoryList />
                    </Grid>
                </PopoverContent>

            </Popover>
        </Box>
    )
}

export default JobCategories
