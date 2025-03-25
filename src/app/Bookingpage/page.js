// IN this we will store all details of the bike how many bikes are available and how it will charged and condition 
// of the bike and all other details of the bike.


import React from 'react';

import { FaCog, FaUserFriends, FaGasPump } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ntorq from "@/assests/ntorqimage.avif";
import mestro from "@/assests/MESTRO1.avif";
import extreme from "@/assests/EXTREME.avif";



export default function Bookingpage() {

    const bikedetails = [
        {
            name: 'Ntorq',
            image: ntorq,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',


        },

        {
            name: 'Mestro',
            image: mestro,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',
        },

        {
            name: 'Extreme',
            image: extreme,
            price: '600',
            time: '6am to 6pm',
            overnight_price: '800 plus 5000 security money',
        }
    ]

    return (

        <div className='mih-h-screen   pt-30'>

            {bikedetails.map((bike, index) => (  // here we are mapping the bike details

                <div className="max-w-sm rounded-2xl shadow-lg border border-gray-200 p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">{}</h2>
                        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-lg flex items-center">
                            ✅ Pay at Pickup Available
                        </span>
                    </div>
                    <p className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md inline-block">2 Trips</p>
                    <img
                        src="/path-to-hero-maestro-image.jpg"
                        alt="Hero Maestro"
                        className="w-full h-40 object-contain my-3"
                    />
                    <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200">
                        View All Packages
                    </button>
                    <div className="flex justify-around text-gray-600 my-3">
                        <div className="flex items-center gap-1"><FaCog /> Automatic</div>
                        <div className="flex items-center gap-1"><FaUserFriends /> 2 Seater</div>
                        <div className="flex items-center gap-1"><FaGasPump /> Petrol</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-gray-700 mb-3">
                        <p className="text-sm">Available at</p>
                        <p className="font-semibold">Pashupati Colony, Civil Lines</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <p className="text-green-600 font-bold text-xl">₹ 550</p>
                            <p className="text-xs text-gray-500">100 Km limit | Extra: ₹4/Km | Fuel Excluded</p>
                        </div>
                        <Button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                            Book Now
                        </Button>
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm">
                        <p>Deposit: <span className="font-semibold">₹ 3000</span></p>
                        <p>Make Year: <span className="font-semibold">2017</span></p>
                    </div>
                </div>
            ))}




        </div>
    )
}