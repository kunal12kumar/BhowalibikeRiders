// IN this we will store all details of the bike how many bikes are available and how it will charged and condition 
// of the bike and all other details of the bike.


import React from 'react';
import Image from 'next/image';  // Import Next.js Image component

import { FaCog, FaUserFriends, FaGasPump } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ntorq from "@/assests/ntorqimage.avif";
import mestro from "@/assests/MESTRO1.avif";
import extreme from "@/assests/EXTREME.avif";
import Link from 'next/link';



export default function Bookingpage() {

    const bikedetails = [
        {
            id:1,
            name: 'Ntorq',
            image: ntorq,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',
            alt: 'Hero Ntorq',


        },

        {
            id:2,
            name: 'Mestro',
            image: mestro,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',
            alt:'Hero Mestro'
        },

        {
            id:3,
            name: 'Extreme',
            image: extreme,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',
            alt:'Hero Extreme'
        }
    ]

    return (

        <div   className='min-h-screen w-full   justify-center items-center flex flex-col sm:flex-row gap-[30px]  pt-30'>

            {bikedetails.map((bike, index) => (  // here we are mapping the bike details

                <div key={bike.id} className="sm:min-w-[28%] min-w-[90%] rounded-2xl h-[450px] shadow-lg border border-gray-200 p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">{bike.name}</h2>
                        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-lg flex items-center">
                            ✅ Pay at Pickup Available
                        </span>
                    </div>
                    {/* <p className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md inline-block">2 Trips</p> */}
                    <Image
                        src={bike.image}
                        alt={bike.alt}
                        width={500}
                        height={500}
                        className="w-full h-40 object-contain my-3"
                    />
                    {/* <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200">
                        View All Packages
                    </button> */}
                    <div className="flex justify-around text-gray-600 my-3">
                        <div className="flex items-center gap-1"><FaCog /> Automatic</div>
                        <div className="flex items-center gap-1"><FaUserFriends /> 2 Seater</div>
                        <div className="flex items-center gap-1"><FaGasPump /> Petrol</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-gray-700 mb-3">
                        <p className="text-sm">Available at</p>
                        <p className="font-semibold">Bhowali</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <p className="text-green-600 font-bold text-xl">₹ {bike.price} /day from {bike.time} </p>
                            <p className="text-xs text-[blue] text-[10px]"><strong>overnight_price: ₹ {bike.overnight_price}</strong></p>
                        </div>
                       
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm">
                      
                        <p>Petrol: <span className="font-semibold text-black">300ml prefiled</span></p>
                        <Link href={'https://forms.gle/oPjbqacBYB52DvyR9'}><Button className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-600">
                            Book Now
                        </Button></Link>
                    </div>
                </div>
            ))}




        </div>
    )
}