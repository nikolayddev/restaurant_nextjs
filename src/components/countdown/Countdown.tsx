"use client";

import Countdown from "react-countdown";

const endDate = new Date('2024-10-20');

export default function CountDown() {
    return (
        <Countdown className="font-bold text-yellow-300 text-5xl" date={endDate} />
    );
}