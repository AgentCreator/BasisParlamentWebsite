"use client";
import { Inter } from "next/font/google";
import { clsx } from 'clsx';
import BasisLogoDark from "./BasisLogoDark";
import BasisLogoLight from "./BasisLogoLight";
const inter = Inter({ subsets: ["latin"] });
export var darkMode = false



export default function Body(props: any) {
    return <body className={clsx(
        inter.className,
        {
            "dark":darkMode,
            "bg-black":darkMode,
            "text-white":darkMode,
            
        },
        
    )}>
        {props.children}
    </body>
}

export function BasisLogo() {
    if (darkMode) {
        return <BasisLogoDark height="1.1em" />
    } else {
        return <BasisLogoLight  height="1.1em" />
    }
}