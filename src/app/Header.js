"use client";

import { PersonStanding } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Header() {

    return (
        <div className="">

            {/* creating header part */}

            <div className="navbar flex justify-between sm:px-10 fixed bg-white shadow-sm z-[50]">
                <a className="btn text-xl bg-amber-400 border-[white]">BhowaliBikeRiders</a>
                <div>
                    <div className="flex items-center space-x-2 text-black">
                        <FaPhoneAlt className="text-green-500 text-lg" />
                        <a href="tel:+917870304944" className="text-lg font-medium">
                            +91-7870304944
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}