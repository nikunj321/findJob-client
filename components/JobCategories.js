import { Popover, PopoverTrigger, PopoverContent, Grid, Box, Button, Text } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'


function JobCategories() {
    return (
        <Box>
            <Popover trigger="hover" placement="bottom-start">
                <PopoverTrigger>
                    <Button variant="link" leftIcon={<FaBars color="white" />} fontSize="16px" pt={4} color="white">categories</Button>
                </PopoverTrigger>
                <PopoverContent bg="gray.100" width="auto">
                    <Grid templateColumns="repeat(4, 1fr)" gap={4} color="gray.700" p={2}>
                        <Text>Accounts Jobs</Text>
                        <Text>Architect Jobs</Text>
                        <Text>Babysitting Jobs</Text>
                        <Text>Beauticians Jobs</Text>
                        <Text>BPO Jobs</Text>
                        <Text>Car mechnics Jobs</Text>
                        <Text>Carpentary Jobs</Text>
                    </Grid>
                </PopoverContent>

            </Popover>
        </Box>
    )
}

export default JobCategories
