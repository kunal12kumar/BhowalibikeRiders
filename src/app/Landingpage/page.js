// this page will contain the picture of nainital and other half will contain the date and other to select the date and time 
"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";









// form here main part of the home page starts 

export default function Landingpage() {
    const words = ["Nainital", "Ranikhet", "Mukteshwar", "Bhimtal", "Corbett National Park",];

    // creating the array of images
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ]

    return (
        <div>
            {/* here we are dividing the page into two half */}
            <div className="grid sm:grid-cols-2 w-full h-screen gap-[80px]">
                {/* in this we will use the component of acceternity  */}
                <div className="text-5xl  flex flex-col justify-center items-center mx-auto w-full font-bold text-[#3a8f60] text-wrap dark:text-neutral-400">
                    <h1>Wander Through the Hills of  </h1>
                    <FlipWords words={words} />
                    <h1>With <strong className="text-[#130080]">BhowaliBikeRiders</strong></h1>
                </div>

                <div className="relative w-full h-full">

                    <ImagesSlider className="h-[100%] w-full" images={images}>
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
                            className="z-50 flex flex-col justify-center items-center"
                        >
                            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                Nature is Calling! Say Yes to Adventure – Book Now and Explore!
                            </motion.p>
                            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                                <span>Book Now →</span>
                                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                            </button>
                        </motion.div>
                    </ImagesSlider>

                </div>



            </div>

        </div>
    )
}