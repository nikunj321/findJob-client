import { Box, Center, Flex, Text, Spacer, Grid } from '@chakra-ui/react';


function TopHeader() {
    return (
        <Box w="100%" bg="purple.900" pl={5} pr={5} color="purple.200">
            <Flex>
                <Center p={3}>
                    <Text>JOB SEARCH</Text>
                </Center>
                <Center p={3}>
                    <Text>MY MONSTER</Text>
                </Center>
                <Center p={3}>
                    <Text>CAREER RESOURCE</Text>
                </Center>
                <Center p={3}>
                    <Text>MONSTER EDUCATION</Text>
                </Center>
                <Spacer />
                <Center p={3}>
                    <Text>Toll-no: +91-40-87546111</Text>
                </Center>
                <Center p={3}>
                    <Text>info@monsterindia.com</Text>
                </Center>
                <Center p={3}>
                    <Text>Toll Free: 1-800-4196666</Text>
                </Center>
            </Flex>
        </Box>
    );
}

export default TopHeader
