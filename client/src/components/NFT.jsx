import React, { useState } from 'react';
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

// Define the NextCard component with props for name and price
function NextCard({ name, price }) {
    return (
        <Card className="py-4 bg-black w-[270px] border border-2 rounded-lg border-blue-500 shadow shadow-md shadow-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {/* Optionally add header content here */}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <img
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                    height={150}
                />
                <h4 className="font-semibold text-medium text-white mt-[20px]">Name: {name}</h4>
                <p className="text-tiny uppercase font-medium text-white">Price: {price}</p>
            </CardBody>
        </Card>
    );
}

// Define the TypewriterEffectDemo component
export function TypewriterEffectDemo() {
    const words = [
        { text: "Mint  ", className: "text-white text-lg" },
        { text: "your ", className: "text-white text-lg" },
        { text: "nft  ", className: "text-white text-lg" },
        { text: "on ", className: "text-white text-lg" },
        { text: "EduChain ", className: "text-white text-lg" },
        { text: "with", className: "text-white text-lg" },
        { text: "EduLaunch-Kit.", className: "text-blue-500 text-lg" },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[5rem] mt-[-160px]">
            <TypewriterEffect words={words} />
        </div>
    );
}

// Define the main NFT component
const NFT = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        price: '',
        file: null,
    });

    // Handler for form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handler for file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file: file,
        });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='bg-black h-screen flex flex-col justify-center'>
            <div className=''>
                <TypewriterEffectDemo />
            </div>
            <div className="flex justify-center space-x-4 mt-8 gap-x-12">
                <NextCard name="NFT #1" price="0.05 EDU" />
                <NextCard name="NFT #2" price="0.10 EDU" />
                <NextCard name="NFT #3" price="0.15 EDU" />
            </div>
        </div>
    );
};

export default NFT;
