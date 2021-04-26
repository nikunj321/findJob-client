import React from 'react';
import { Button, GridItem, Text } from '@chakra-ui/react';
import { AiOutlineRight } from 'react-icons/ai';

function Employer({ heading, body, buttonContent }) {
    return (
        <GridItem bg="white" rounded="sm" textAlign="center" colSpan={1} p={4}>
            <Text color="purple.800" fontSize="x-large" fontWeight="normal">{heading}</Text>
            <Text pt={4} pb={6}>{body}</Text>
            <Button bg="purple.800" size="lg" color="white" rightIcon={<AiOutlineRight />}>{buttonContent}</Button>
        </GridItem>
    )
}

export default function EmployerFind() {
    return (
        <Employer
            heading="Let employers find you"
            body="Thousands of employers search for candidates on Monster"
            buttonContent="Upload Resume"
        />
    )
}


export const EmployerAttention = () => {
    return (
        <Employer
            heading="Grab Employer's Attention"
            body="Get a job-winning professtional resume from our experts"
            buttonContent="Get Right Resume"
        />
    )
}

