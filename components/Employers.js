import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover'
import React from 'react'

function Employers() {
    return (
        <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
                <Button variant="outline" mr="-px">Employers</Button>
            </PopoverTrigger>
            <PopoverContent width="auto">
                <VStack spacing="10px" p={4} align="flex-start">
                    <Button variant="link">Log in</Button>
                    <Button variant="link">Post Jobs</Button>
                    <Button variant="link">Search Resume</Button>
                    <Button variant="link">Buy Online</Button>
                    <Button variant="link">Contact Us</Button>
                    <Button variant="link">Join mRecruiter</Button>
                </VStack>
            </PopoverContent>
        </Popover>
    )
}

export default Employers
