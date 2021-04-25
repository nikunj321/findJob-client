import { Box, Button, ButtonGroup, Flex, Grid, HStack, Input, InputGroup, InputRightAddon, InputRightElement, Spacer, Text, VStack } from '@chakra-ui/react';
import Employers from './Employers';
import JobCategories from './JobCategories';
import JobSearch from './JobSearch';

function SecondHeader() {
    return (
        <Box bg="purple.700" w="100%" h="60vh">
            <HStack color="white" spacing="30px" pt={4} pr="8" pl="8" fontSize="20px">
                <Text fontSize="50px">monster</Text>
                <JobCategories />
                {/* <Text pl="9">categories</Text> */}
                <Spacer />
                <Text>Job Seeker Login / Register</Text>
                <ButtonGroup size="sm" isAttached variant="outline">
                    {/* <Button mr="-px">Employers</Button> */}
                    <Employers />
                    <Button>Buy Online</Button>
                </ButtonGroup>
            </HStack>
            <JobSearch />

        </Box>
    );
}

export default SecondHeader;