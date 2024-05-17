import Image from "next/image";
import Link from "next/link";
import BasisLogoDark from "./BasisLogoDark";
import BasisLogoLight from "./BasisLogoLight";
import { BasisLogo } from "./Footer";



export default function Home() {
  return (
    <>
      <p className=" text-center m-10 font-bold text-6xl">Welcome to<BasisLogo/></p>
      <div className=" grid place-content-center">
      <div className=" h-60 aspect-video border-2 border-red-600 max-md:w-screen m-2">video here</div>
      </div>
      <div className=" flex flex-row gap-7 p-5 w-screen">
        <SLink href={"/parlament"}>parlament</SLink>
        <SLink href={"/about"}>about</SLink>
        <SLink href={"/clubs"}>clubs</SLink>
      </div>
    </>
  );
}

function SLink(props: any) {
  return <>
    <Link href={props.href} className=" bg-accent-light-100 dark:bg-accent-dark-100 w-full hover:bg-accent-light-50 hover:ring-accent-light-25 ring-0 dark:ring-2 ring-accent-light-50 hover:dark:bg-accent-dark-50 text-white dark:shadow-none shadow-xl hover:dark:ring-accent-dark-25 dark:ring-accent-dark-50 text-center py-14 rounded-lg">
      <div className="">
        <p className=" after:content-['_↗'] max-ssm:text-sm"> {props.children}</p>
        
      </div>
    </Link>
  </>
}