import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { GridItem } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

function EmailSubscribe() {
    return (
        <GridItem colSpan={1} rounded="sm" bg="gray.500" p={4} color="white">
            <Text p={2}>Get new job for this search by Email</Text>
            <Input placeholder="your email address here" bg="white" />
            <Checkbox py={2} colorScheme="white"><Text>Get an email with jobs recommanded</Text></Checkbox>
            <Button float="right" size="lg" bg="orange.500" rightIcon={<AiOutlineRight />}>keep me posted</Button>
        </GridItem>
    )
}

export default EmailSubscribe
