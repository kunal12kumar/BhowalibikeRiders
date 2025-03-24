"use client";

import { PersonStanding } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {

    return (
        <div className="">

            {/* creating header part */}

            <div className="navbar fixed bg-white shadow-sm z-[50]">
                <a className="btn text-xl bg-amber-400 border-[white]">BhowaliBikeRiders</a>
            </div>
        </div>
    )

}