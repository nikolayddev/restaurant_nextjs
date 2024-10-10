"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
    { id: 1, title: 'Homepage', url: '/' },
    { id: 2, title: 'Menu', url: '/menu' },
    { id: 3, title: 'Working Hours', url: '/' },
    { id: 4, title: 'Contact', url: '/' },
]

export default function Menu() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {!open ? (
                <Image
                    src="/open.png"
                    alt="" width={20}
                    height={20}
                    onClick={() => setOpen(true)}
                    className="cursor-pointer"
                />
            ) : (
                <Image
                    src="/close.png"
                    alt=""
                    width={20}
                    height={20}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                />
            )}

            <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] z-10 flex flex-col gap-8 items-center justify-center text-3xl">
                {links.map((link) => (
                    <Link href={link.url} key={link.id}>
                        {link.title}
                    </Link>
                ))}
                <Link href="/login">Login</Link>
                <Link href="/orders">Orders</Link>
            </div>
        </div>
    );
}