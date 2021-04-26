import { Box, VStack, HStack, Text, InputRightElement, InputGroup, Input, Button, Icon, Select } from '@chakra-ui/react';
import { HiLocationMarker, HiOutlineIdentification } from 'react-icons/hi'


function JobSearch({ isIndexPage }) {
    return (
        <Box pt={isIndexPage ? "14" : "2"} pl="14">
            {isIndexPage &&
                (
                    <VStack color="white" align="flex-start">
                        <Text fontSize="2xl" fontWeight="medium" letterSpacing="wide">Find Better through Better ACCESS, Better CONNECTIONS, Better JOBS</Text>
                        <Text>Wake up to find better with monsterindia.com</Text>
                    </VStack>
                )
            }
            <HStack spacing="20px" pt={5}>
                <Input bg="white" type="text" placeholder="Job title, keywords or Company Name" maxWidth="400px" p={6} />
                <InputGroup maxWidth="300px">
                    <Input bg="white" placeholder="city or state" p={6} />
                    <InputRightElement children={<HiLocationMarker color="grey.100" />} />
                </InputGroup>
                <Select variant="outline" placeholder="experience" maxWidth="200px" size="lg" bg="white" color="gray.800">
                    <option value="1">1 yr</option>
                    <option value="2">2 yr</option>
                    <option value="3">3 yr</option>
                    <option value="4">4 yr</option>
                    <option value="5">5 yr</option>
                    <option value="6">6 yr</option>
                    <option value="7">7 yr</option>
                    <option value="8">8 yr</option>
                    <option value="9">9 yr</option>
                </Select>
                <Button p={6} bg="green" color="white">Find Jobs</Button>
            </HStack>
            {isIndexPage &&
                (
                    <HStack spacing="25px" p={2}>
                        <Icon as={HiOutlineIdentification} color="orange.500" w={14} h={14} />
                        <VStack color="white" align="flex-start">
                            <Text fontWeight="normal" fontSize="20px">Let employers find you</Text>
                            <Text> Thousands of employes Search on Monster</Text>
                        </VStack>
                        <Button variant="outline" color="white">Upload resume to create your Monster profile</Button>
                    </HStack>
                )
            }
        </Box>
    )
}


export default JobSearch;
