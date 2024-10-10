import Link from "next/link";
import Menu from "../menu/Menu";

export default function Navbar() {
    return (
        <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
            <div className="text-xl">
                <Link href="/">KrasiDev</Link>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    );
}