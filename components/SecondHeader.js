import { Box, Button, ButtonGroup, HStack, Spacer, Text } from '@chakra-ui/react';
import Employers from './Employers';
import JobCategories from './JobCategories';
import JobSearch from './JobSearch';

function SecondHeader({ isIndex }) {
    return (
        <Box
            bg="purple.700"
            w="100%"
            h={isIndex ? "60vh" : "28vh"}
        >
            <HStack color="white" spacing="30px" pt={isIndex ? 4 : 2} pr="8" pl="8" fontSize="20px">
                <Text fontSize="50px">monster</Text>
                {isIndex && <JobCategories />}
                <Spacer />
                <Text>Job Seeker Login / Register</Text>
                {isIndex && (
                    <ButtonGroup size="sm" isAttached variant="outline">
                        <Employers />
                        <Button>Buy Online</Button>
                    </ButtonGroup>
                )}
            </HStack>
            <JobSearch isIndexPage={isIndex} />
        </Box >
    );
}

export default SecondHeader;