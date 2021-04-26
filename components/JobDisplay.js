import Icon from '@chakra-ui/icon'
import { Box, Grid, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react'
import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs'

function JobDisplay(props) {
    return (
        <Box p={16} bg="gray.100">
            <Grid
                templateColumns="repeat(4, 1fr)"
                gap={4}
            >
                {
                    props.children
                }
            </Grid>
            <HStack spacing={2} py={4}>
                <Text>Result Page:</Text>
                <HStack color="purple.800" fontSize="xl" fontWeight="semibold" >
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>Next <Icon as={BsChevronDoubleRight} color="purple.800" /></Text>
                </HStack>
            </HStack>
        </Box>
    )
}

export default JobDisplay
