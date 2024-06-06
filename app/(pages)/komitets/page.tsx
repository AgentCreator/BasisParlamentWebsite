import clsx from "clsx"
import Link from "next/link"

interface CardInfo {
    title: string;
    description: string;
    links?: Array<string>;
}
var cards: Array<CardInfo> = [

]

function SLink(props: any) {
    return <Link href={props.href} className={clsx(` dark:bg-accent-dark-100 hover:dark:bg-accent-dark-50 bg-accent-light-100 shadow-md hover:bg-accent-light-100/80  p-1 w-full text-center text-white rounded-xl`, props.className)}>{props.children}</Link>
}

function Card(props: any): JSX.Element {
    return <div className=" bg-white/10 w-72 p-10 ring-2 ring-gray-400/30 m-3 dark:shadow-none shadow-md hover:bg-white/15 transition-colors dark:hover:ring-gray-300/30 rounded-xl inline-block">
        <p className=" text-2xl font-bold">{props.title}</p>
        <p className=" dark:text-white/50 text-black/50">{props.children}</p>
        <div className=" w-full flex flex-row gap-3 mt-5">
            <SLink href={"#"} className="" >Join</SLink>
            {/* <SLink href={"#"} className=" rounded-l-md" >About</SLink> */}
        </div>
    </div>
}


function Home() {
    return <div className=" grid w-screen h-screen place-items-center p-20 max-md:pt-10 max-md:p-0 overflow-x-hidden">
                <div className=" w-full h-full m-10 dark:bg-black bg-white rounded-3xl p-10 max-md:p-2">
                   <div className="">
                        <p className=" text-3xl font-bold max-md:p-3">Комітети</p>
                        <p className=" text-white/50 max-sm:pt-2 max-sm:pl-3 text-base max-sm:w-2/3">Це обʼєднання учнів, що займається вибраними питаннями. <br /> Навіть не парламентери можуть приєднатися! </p>
                        <div className=" pt-10 max-sm:grid w-full h-full justify-center">
                            <Card title="Клуби"><p>Комітет, який займається клубами.</p></Card>
                            <Card title="Волонтерство"><p>Комітет, який займається волонтерством.</p></Card>
                            <div className=" max-w-72 p-10 text-center ring-gray-400/30 m-3 shadow-none max-sm:w-screen transition-colors dark:hover:ring-gray-300/30 rounded-xl inline-block">
        <p className=" text-2xl font-bold text-accent-dark-50">скоро буде більше!</p>
        <p className=" dark:text-white/50 text-black/50">у нас поки що мало комітетів. але ми плануємо додати більше!</p>
    </div>
                        </div>
                   </div>
                </div>
            </div>
}
export default Home