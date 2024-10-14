import { singleProduct } from "@/data";
import Image from "next/image";

export default function SingleProductPage() {
    return (
        <div className="p-4 lg-px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row ">
            {/* IMAGE CONTINER */}
            {singleProduct.img && <div className="relative h-[70vh]">
                <Image src={singleProduct.img} alt="" fill className="object-fit" />
            </div>
            }
            {/* TEXT CONTAINER */}
            <div className="">
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
            </div>
        </div>
    );
}