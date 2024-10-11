"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        title: "always fresh and crispy & always hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in BG",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg"
    }
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(
    //         () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 4000
    //     );

    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="flex-1 flex flex-col text-red-500 font-bold justify-center items-center gap-8">
                <h1 className="text-5xl uppercase p-4 md:p-4 text-center md:text-6xl xl:text-7xl">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
            </div>
            <div className="w-full flex-1 relative">
                <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}