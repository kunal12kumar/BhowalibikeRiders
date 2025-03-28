// this page will contain the picture of nainital and other half will contain the date and other to select the date and time 
"use client";
import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";

import Link from "next/link";
import ContactPage from "../showgoolemap/page";










// form here main part of the home page starts 

export default function Landingpage() {
    const words = ["Nainital", "Ranikhet", "Mukteshwar", "Bhimtal", "Corbett National Park",];

    // for date picker
    const [date, setDate] = useState(new Date());


    // creating the array of images
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ]

    // Get the current date and time in the required format (YYYY-MM-DDTHH:MM)
    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
    };

    const [startDate, setStartDate] = useState(getCurrentDateTime());
    const [endDate, setEndDate] = useState(getCurrentDateTime());

    // Function to calculate the duration in days
    const calculateDuration = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return duration > 0 ? duration : 1; // Minimum duration should be 1 day
    };

    // Function to handle start date change
    const handleStartDateChange = (e) => {
        const newStartDate = e.target.value;
        setStartDate(newStartDate);

        // Ensure end date is not earlier than start date
        if (newStartDate > endDate) {
            setEndDate(newStartDate);
        }
    };

    // Function to handle end date change
    const handleEndDateChange = (e) => {
        const newEndDate = e.target.value;
        setEndDate(newEndDate);
    };

    return (
        <div className="h-auto">
            {/* here we are dividing the page into two half */}
            <div className="grid sm:grid-cols-2 w-full sm:h-screen  sm:gap-[80px] gap-12 ">
                {/* in this we will use the component of acceternity  */}




                <div className="relative w-full h-full">

                    <ImagesSlider className=" sm:h-[100%]  h-[600px] w-full" images={images}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="z-80 flex flex-col justify-center items-center"
                        >
                            <motion.p className="font-bold sm:text-xl text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                Nature is Calling! Say Yes to Adventure – Book Now and Explore!
                            </motion.p>
                            <Link href={'/Bookingpage'}><button className="px-4 cursor-pointer sm:hover:scale-110 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                                <span>Book Now →</span>
                                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                            </button></Link>
                        </motion.div>
                    </ImagesSlider>

                </div>

                {/* Date part */}


                <div className="sm:text-5xl text-2xl sm:gap-5 sm:my-0  my-4  flex flex-col justify-center items-center mx-auto w-full font-bold text-[#3a8f60] text-wrap dark:text-neutral-400">
                    <h1>Wander Through the Hills of  </h1>
                    <FlipWords words={words} />
                    <h1>With <strong className="text-[#130080]">BhowaliBikeRiders</strong></h1>


                    <Link href={'/Bookingpage'}><button className="px-4 py-2 cursor-pointer sm:hover:scale-110  text-black border text-2xl  bg-[#43d343] mx-auto text-center rounded-full relative mt-4">
                        <span>Book Now →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button></Link>








                </div>



            </div>

            <div className="w-full  text-center my-10">
                <ContactPage></ContactPage>
            </div>

        </div>
    )
}