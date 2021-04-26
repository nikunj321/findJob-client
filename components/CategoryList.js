import React from 'react';
import { Text } from '@chakra-ui/react'

function CategoryList() {

    const categoryList = [
        "Accountant Jobs",
        "Architect Jobs",
        "Babysitter Jobs",
        "Beautician Jobs",
        "BPO Jobs",
        "Car Mechanic Jobs",
        "Carpentry Jobs",
        "Clinical Staff Jobs",
        "Helper/Labourer Jobs",
        "Cook Jobs",
        "Customer Support Jobs",
        "Data Entry Operator Jobs",
        "Delivery Jobs",
        "Developer Jobs",
        "Driver Jobs",
        "Web Designer Jobs",
        "Gardener Jobs",
        "Electrician Jobs",
        "Hardware & Net Jobs",
        "Housekeeping Jobs",
        "IT Professional Jobs",
        "Machinist Jobs",
        "Management Jobs",
        "Marketing Jobs",
        "Mason Jobs",
        "Painter Jobs",
        "Peon Jobs",
        "Personal Assistant Jobs",
        "Photographer Jobs",
        "Plumber Jobs",
        "Receptionist Jobs",
        "Sales Jobs",
        "Security Jobs",
        "Tailoring Jobs",
        "Teacher Jobs",
        "Trainer Jobs",
        "Waiter Jobs",
        "Others Jobs",
    ];
    return (
        <>
            {
                categoryList.map(category => <Text>{category}</Text>)
            }
        </>
    )
}

export default CategoryList
