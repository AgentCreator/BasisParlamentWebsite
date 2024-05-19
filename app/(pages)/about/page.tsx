import Link from 'next/link'
import Markdown from 'react-markdown'

const markdown = `тут покіщо нічого :)
`

function Title() {
    return <div className=" w-[80ch] dark:bg-white/20 bg-white backdrop-blur-xl shadow-sm aspect-[3/1] max-md:aspect-[10/3] m-10 mt-5 rounded-xl max-md:w-[85%] max-md:m-0 max-md:mb-10 max-md:mt-4">
        <p className=' text-8xl font-bold align-middle h-full md:m-10 max-md:m-2 max-md:text-4xl'>Про Нас</p>
    </div>
}

function Artcl() {
    return <div className=" w-[80ch] p-10 text-wrap border-8 border-b-0 dark:border-white/20 border-black/20 min-h-[37.6rem]  max-md:w-[90%] rounded-xl rounded-b-none max-md:m-0"><Markdown>{markdown}</Markdown></div>
}

function Home() {
    return <div className=" flex flex-col items-center w-screen">
        <Title/>
        <Artcl/>
    </div>
}
export default Home