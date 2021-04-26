import { Box, Flex, GridItem, Spacer } from '@chakra-ui/layout'
import { Button, Icon, Text } from '@chakra-ui/react'
import React from 'react';
import { BsClockHistory } from 'react-icons/bs';
import { AiOutlineShareAlt, AiOutlineRight } from 'react-icons/ai'

function JobCard() {
    return (
        <GridItem
            colSpan={3}
            bg="white"
            py={4}
            px={6}
            rounded="sm"
            boxShadow="base"
            cursor="pointer"
            _hover={{
                boxShadow: "inner"
                // border: "4px solid #a956e8"
            }}
        >
            <Flex borderBottom="1px solid #807a85" pt="2" pb="4" letterSpacing="wide" justify="space-between">
                <Text fontWeight="semibold" fontSize="xl" color="gray.800">User Experience/Product Designer - Analytics Platform</Text>
                <Spacer />
                <Text px="3"><Icon as={BsClockHistory} /> 14 Days ago</Text>
                <Text px="3"><Icon as={AiOutlineShareAlt} /> Share</Text>
            </Flex>
            {/* <Divider orientation="horizontal" /> */}
            <Flex justify="space-between" py="2">
                <Box>
                    <Text color="gray.500">company</Text>
                    <Text fontWeight="semibold" color="gray.800">Enbose India Private Limited</Text>
                </Box>
                <Box>
                    <Text color="gray.500">location</Text>
                    <Text fontWeight="semibold" color="gray.800">Bengluru, Karnataka, India</Text>
                </Box>
                <Box>
                    <Text color="gray.500">experience</Text>
                    <Text fontWeight="semibold" color="gray.800">9-12 years</Text>
                </Box>
                <Box maxWidth="250px">
                    <Text color="gray.500">Keyskills</Text>
                    <Text fontWeight="semibold" color="gray.800" isTruncated={true}>UX Lead. UX/UI, Photoshop, Sketch,safhehanfaeansfaewlaffkjas ahfhsdfhwefa faself</Text>
                </Box>
            </Flex>
            <Flex justify="space-between" py="2">
                <Box maxWidth="650px">
                    <Text color="gray.500">Summary</Text>
                    <Text fontWeight="semibold" color="gray.800" isTruncated>Parterned with project teams to perform user-centered design activies that actively involve user</Text>
                </Box>
                <Button size="md" rounded="sm" bg="orange.500" color="white" rightIcon={<AiOutlineRight />} >
                    Apply
                        </Button>
            </Flex>
        </GridItem>
    )
}

export default JobCard
