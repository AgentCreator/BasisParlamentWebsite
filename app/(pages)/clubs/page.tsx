import { PencilSquareIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link';

interface clubInterface {
    name: string;
    time?: string;
    owner?: string;
    chat?: string;
}

const clubs: Array<clubInterface> = [
    {name:"Test", time:"wednesday, 15:45 — 16:30", chat:"t.me", owner:"Мумрик"},
    {name:"Генетика (біологія)"},
    {name:"Головоломки"},
    {name:"Історично-картографічний"},
    {name:"Історично-комедійний"},
    {name:"Підземелля та дракони"},
    {name:"Орігамі"},
    {name:"Сенс Філософії"},
    {name:"Теніс"},
    {name:"Юні актори"},
    {name:"DIY"},
]

function Tabl() {
    return <table className=" w-full mt-10">
        <thead>
            <tr>
                {/* <td></td> */}
                <td className="pb-5">club name</td>
                <td className="pb-5">owner</td>
                <td className="pb-5">time</td>
            </tr>
        </thead>
        <tbody className="">
            {clubs.map((e) => <tr className="dark:odd:bg-accent-dark-100/20 odd:bg-accent-light-100/10">
                {/* <td className=" ">{clubs.indexOf(e)+1}</td> */}
                <td className='p-4 pr-0 rounded-l-full'>{/**<Link href={`/club/${e.owner.replaceAll(" ", "+")}/${e.name.replaceAll(" ", "+")}`}> */}
                    <p className={clsx(
                        ' overflow-ellipsis overflow-hidden inline-block pl-2',
                        {
                            " w-full":!(e.owner && e.time)
                        }
                        )}>
                        {e.name}
                    </p>{/**</Link> */}
                    {e.chat ? <Link href={`https://${e.chat}`} className=' dark:bg-black bg-white py-1 px-5 m-1 ring-2 rounded-lg inline-block -translate-y-1 md:ml-10 max-md:-translate-x-1 ring-blue-600/50 hover:ring-0 hover:bg-blue-600 hover:scale-200 transition-all duration-100 ease-out active:scale-75 hover:text-black'>chat</Link> : ""}
                </td>
                <td>{e.owner ? e.owner : "—"}</td>
                <td className=" rounded-r-full p-4">{e.time ? e.time : "—"}</td>
                
            </tr>)}
        </tbody>
    </table>
}

function Home() {
    return <div className=" grid w-screen h-screen place-items-center p-20 max-md:pt-10 max-md:p-0 overflow-x-hidden">
        <div className=" w-full h-full m-10 dark:bg-black bg-white rounded-3xl p-10 max-md:p-5 max-md:overflow-hidden">
            <div className=" flex flex-row">
                <p className=" font-bold text-5xl max-md:text-3xl">clubs</p>
                <div className=" relative w-full">
                    {/* TODO: decoment this when you figure out how to make the "suggest new club" feature */}
                    {/* <Link href={"#"}>
                    <div className=" md:dark:hover:bg-white/10 md:hover:bg-gray-100 rounded-full absolute right-0 group shadow-md bg-gray-50 dark:bg-white/10">
                    <PencilSquareIcon className=' dark:text-white h-14 transition-all duration-[130] p-2 cursor-pointer'/>
                    <span className=' absolute min-w-max -right-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity max-md:opacity-100 font-bold text-sm'>suggest new</span>
                    </div>
                    </Link> */}
                </div>
            </div>
            <Tabl/>
        </div>
    </div>
}

export default Home