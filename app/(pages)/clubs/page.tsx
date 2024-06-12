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
    {name:"Генетика (біологія)", chat:"t.me/+01hxnW1fPGZkNzMy"},
    {name:"Головоломки", chat:"t.me/+hJ1bHcF2QVA4ZGQy"},
    {name:"Історично-картографічний", chat:"t.me/+0StbM49B28RmZTZi"},
    {name:"Історично-комедійний", chat:"t.me/+0StbM49B28RmZTZi"},
    {name:"настільні ігри (D&D)", chat:"t.me/+gRvsSi3z-m82ODJi"},
    {name:"Орігамі", chat:"t.me/+mQyq4yUyB-EwMDUy"},
    {name:"Сенс Філософії", chat:"t.me/+74D47U7Zkq9mOWQ6"},
    {name:"Теніс", chat:"t.me/+txxDi7Yu-Yc3ZTUy"},
    {name:"Юні актори", chat:"t.me/+S8ysOrIah_pkMWRi"},
    {name:"DIY", chat:"t.me/+PIabfMvt9LkyOGNi"},
]

function Tabl() {
    return <table className=" w-full mt-10">
        <thead>
            <tr className=' dark:text-white/50 font-semibold'>
                {/* <td></td> */}
                <td className="pb-5">клуб</td>
                <td className="pb-5">головний</td>
                <td className="pb-5">час</td>
            </tr>
        </thead>
        <tbody className="">
            {clubs.map((e) => <tr className="dark:odd:bg-accent-dark-100/20 odd:bg-accent-light-100/10 w-full">
                {/* <td className=" ">{clubs.indexOf(e)+1}</td> */}
                <td className='p-4 pr-0 rounded-l-full'>{/**<Link href={`/club/${e.owner.replaceAll(" ", "+")}/${e.name.replaceAll(" ", "+")}`}> */}
                    <p className={clsx(
                        ' overflow-ellipsis overflow-hidden inline-block pl-2 w-min line-clamp-2',
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
        <div className=" w-full h-full m-10 dark:bg-black bg-white rounded-3xl p-10 max-md:p-2">
            <div className=" flex flex-row">
                <p className=" font-bold text-5xl max-md:text-3xl max-md:pl-3 max-md:pt-3">Клуби</p>
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
