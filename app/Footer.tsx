"use client";
import { Inter } from "next/font/google";
import { clsx } from 'clsx';
import BasisLogoDark from "./BasisLogoDark";
import BasisLogoLight from "./BasisLogoLight";
import Markdown from 'react-markdown'
const inter = Inter({ subsets: ["latin"] });
import { create } from 'zustand'
import { useEffect } from "react";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
// export var darkMode = true

const useStore = create((set) => ({
    darkMode: true,
    // darkMode: true,

    setDarkMode: () => set((state: any) => ({
        darkMode: typeof JSON.parse(localStorage.getItem("darkmodePreference")!) === "boolean" ? JSON.parse(localStorage.getItem("darkmodePreference")!) : []
    })),

    switchDarkMode: () => set((state: any) => ({ 
        darkMode: !state.darkMode
    }))
    
  }))



export default function Body(props: any) {
    const setDarkMode: any = useStore((state: any) => state.setDarkMode)
    const darkMode: boolean = useStore((state: any) => state.darkMode)

    useEffect(() => {
        
        setDarkMode()
    }, [])

    console.log(darkMode)
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



цей вебсайт написаний **Олександром Крайняком** для **Парламенту Школи Базис**.

якщо вам сподобалась моя робота, будь ласка підпишіться на мене на [**Ґітхабі**](https://github.com/AgentCreator)

**дякую!**

**офіційні аккаунти школи Базис:**
\`\`\`
    `
    const isDark: boolean = useStore((state: any) => state.darkMode)
    useEffect(() => {
        localStorage.setItem("darkmodePreference", JSON.stringify(isDark))
        console.log(JSON.parse(localStorage.getItem("darkmodePreference")!))
    }, [isDark])

    const switchDark = useStore((state: any) => state.switchDarkMode)

    return <div className=" w-screen min-h-80 dark:bg-white/10 bg-black/10 rounded-t-[3rem] p-10 dark:text-white/50 text-black/50 footer">
        <Markdown>{RArcticle}</Markdown>
        <div className="">
        <a href="https://www.instagram.com/sciencebasis/" className=" hover:dark:bg-white/10 hover:bg-black/10 p-3 rounded-xl transition-all hover:scale-105 active:scale-90 ease-in-out">Instagram</a>
        <a href="https://www.facebook.com/sciencebasis" className=" hover:dark:bg-white/10 hover:bg-black/10 p-3 rounded-xl transition-all hover:scale-105 active:scale-90 ease-in-out">Facebook</a>
        <a href="https://www.youtube.com/channel/UC7v_T6cw7GBoppmqiIMaV6A" className=" hover:dark:bg-white/10 hover:bg-black/10 p-3 rounded-xl transition-all hover:scale-105 active:scale-90 ease-in-out">Youtube</a>
        </div>
        <button className=" mt-10 mb-3 hover:dark:bg-white/10 hover:bg-black/10 p-3 rounded-xl transition-all hover:scale-105 active:scale-90 ease-in-out" onClick={switchDark}>включити {isDark ? "світлу" : "темну"} тему</button>
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