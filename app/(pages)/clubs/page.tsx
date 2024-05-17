import { PencilSquareIcon } from '@heroicons/react/24/outline'

interface clubInterface {
    name: string;
    time: string;
    owner: string;
}

const clubs: Array<clubInterface> = [
    {name:"JuSynbvnbvbvchchch", time:"wednesday, 15:45 - 16:30", owner:"saskakolbaska"},
    {name:"JuSy", time:"wednesday, 15:45 - 16:30", owner:"saskakolbaska"},
    {name:"JuSy", time:"wednesday, 15:45 - 16:30", owner:"saskakolbaska"},
    {name:"JuSy", time:"wednesday, 15:45 - 16:30", owner:"saskakolbaska"},
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
                <td className='p-4 rounded-l-full'><p className=' max-sm:w-[7ch] max-md:w-[15ch] overflow-ellipsis overflow-hidden '>{e.name}</p></td>
                <td>{e.owner}</td>
                <td className=" rounded-r-full p-4">{e.time}</td>
                
            </tr>)}
        </tbody>
    </table>
}

function Home() {
    return <div className=" grid w-screen h-screen place-items-center p-20 max-md:pt-10 max-md:p-0">
        <div className=" w-full h-full m-10 dark:bg-black bg-white rounded-3xl p-10 max-md:p-5 max-md:overflow-hidden">
            <div className=" flex flex-row">
                <p className=" font-bold text-5xl max-md:text-3xl">clubs</p>
                <div className=" relative w-full">
                    <div className=" md:dark:hover:bg-white/10 md:hover:bg-gray-100 rounded-full absolute right-0 group shadow-md bg-gray-50">
                    <PencilSquareIcon className=' dark:text-white h-14 transition-all duration-[130] p-2 cursor-pointer'/>
                    <span className=' absolute min-w-max -right-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity max-md:opacity-100 font-bold text-sm'>suggest new</span>
                    </div>
                </div>
            </div>
            <Tabl/>
        </div>
    </div>
}

export default Home