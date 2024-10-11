import Image from "next/image";

export default function Featured() {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4">
                    {/* IMG CONTAINER */}
                    <div className="relative flex-1 w-full">
                        <Image src="/temporary/p1.png" alt="" fill className="object-contain"/>
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-xl font-bold uppercase">Title</h1>
                        <p>Description</p>
                        <span className="text-xl font-bold">$123</span>
                        <button className="bg-red-500 text-white p-2 rounded-md">Add to cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
}