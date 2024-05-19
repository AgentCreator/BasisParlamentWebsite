"use client";
import { Inter } from "next/font/google";
import { clsx } from 'clsx';
import BasisLogoDark from "./BasisLogoDark";
import BasisLogoLight from "./BasisLogoLight";
import Markdown from 'react-markdown'
const inter = Inter({ subsets: ["latin"] });
import { create } from 'zustand'
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
// export var darkMode = true

const storedDarkModePreference = typeof JSON.parse(localStorage.getItem("darkmodePreference")!) === "boolean" ? JSON.parse(localStorage.getItem("darkmodePreference")!) : []
console.log(storedDarkModePreference)

const useStore = create((set) => ({
    darkMode:storedDarkModePreference,
    switchDarkMode: () => set((state: any) => ({ 
        darkMode: !state.darkMode
    }))
    
  }))



export default function Body(props: any) {
    const darkMode: boolean = useStore((state: any) => state.darkMode)
    return <body className={clsx(
        inter.className,
        "transition-colors duration-150",
        {
            "dark":darkMode,
            "bg-black":darkMode,
            "text-white":darkMode,
            
        },
        
    )}>
        {props.children}
    </body>
}

export function Footer() {


    const RArcticle = `



this website is made by **Oleksander Krainiak** for the **Basis School Parlament**.

if you have spare time, please follow me on [**github**](https://github.com/AgentCreator)

**thanks!**

###### **Basis School Accounts:**

***[instagram](https://www.instagram.com/sciencebasis/)***
***[facebook](https://www.facebook.com/sciencebasis/)***
***[youtube](https://www.youtube.com/@sciencebasis)***
\`\`\`
    `
    const isDark: boolean = useStore((state: any) => state.darkMode)
    useEffect(() => {
        localStorage.setItem("darkmodePreference", JSON.stringify(isDark))
        console.log(JSON.parse(localStorage.getItem("darkmodePreference")!))
    }, [isDark])

    const switchDark = useStore((state: any) => state.switchDarkMode)

    return <div className=" w-screen h-80 dark:bg-white/10 bg-black/10 rounded-t-[3rem] p-10 dark:text-white/50 text-black/50 footer">
        <Markdown>{RArcticle}</Markdown>
        <button className=" hover:dark:bg-white/10 hover:bg-black/10 p-3 rounded-xl transition-all hover:scale-105 active:scale-90 ease-in-out" onClick={switchDark}>switch to {isDark ? "light" : "dark"} mode</button>
    </div>
}

export function BasisLogo( props: any) {
    const darkMode = useStore((state: any) => state.darkMode)
    if (darkMode) {
        return <BasisLogoDark height="1.1em" className={props.className}/>
    } else {
        return <BasisLogoLight  height="1.1em" className={props.className}/>
    }
}