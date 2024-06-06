import clsx from "clsx"
import Link from "next/link"
import "./griddy.css"
import { ArrowUpRightIcon, ChatBubbleLeftRightIcon, PencilSquareIcon } from "@heroicons/react/24/outline"

function Card(props: any): JSX.Element {
    return <div className={clsx(" bg-white/10 p-10 pb-5 ring-2 ring-gray-400/30 w-full mx-10 rounded-xl h-full inline-block shadow-lg hover:bg-white/15 transition-colors hover:ring-gray-400/40", props.className)}>
        <p className=" font-bold text-3xl pb-5 card">{props.title}</p>
        {/* description */}
        {props.children}
        
    </div>
}

function SLink(props: any) {
    return <Link href={props.href} className=" text-sky-500 font-semibold block pt-1">
        {props.children} <ArrowUpRightIcon className=" h-[1em] inline-block"/>
    </Link>
}
function Home(){
    return <div className=" grid w-screen h-screen place-items-center p-20 max-md:pt-10 max-md:p-0 ">
        <div className=" w-full h-full dark:bg-black bg-white rounded-3xl lg:p-10 p-0">
            <p className=' text-5xl font-bold mb-10 max-lg:p-10  max-md:p-5 max-sm:p-2'>Парламент</p>
            {/* <Card title="hello" ><p>ldsnsdlksdlkmn</p><SLink href={"/"}>hello</SLink></Card> */}
            <div className=" griddy p-3 lg:[grid-template-columns:_repeat(4,_minmax(240px,_1fr));] [grid-template-columns:_repeat(auto-fit,_minmax(240px,_1fr));] ">
                <Card title="Хартія прав та зобов’язань" className=" row-span-1">
                    <p className=" dark:text-white/50 text-black/50">що Парламентери можуть робити, a що ні.</p>
                    <SLink href={"/parlament/hartias"}>прочитати тут</SLink>
                    <SLink href={"https://bit.ly/4dw2KiI"}>Google Docs</SLink>
                </Card>
                <Card title="Що таке Парламент?" className=" md:col-span-2 max-md:row-span-2">
                    <p className=" dark:text-white/75 text-black/50">Це орган самоврядування учнів Базису, голос та захисник інтересів учнів.
Р.S: Тому і є відкритим до відвідування усіма учнями.
Парламент обраний ТІЛЬКИ учнями на один календарний рік. (дод. інфо. пізніше)
Обираються певна кількість представників на паралель.
Звісно ж, відповідальність.</p>
                </Card>
                <Card title="Приходьте до нас!" className=" row-span-2">
                    <p className=" dark:text-white/50 text-black/50">хочеш приєднатися до парламенту? у нас будуть скоро вибори, та можете спробувати прийти до нас в п'ятницю в перші 2 тижні щоб спробувати!</p>
                    <ChatBubbleLeftRightIcon className="w-full aspect-square "/>

                </Card>
                <Card title="Запропонуйте ідею!" className=" md:col-span-3 max-md:row-span-3">
                    <div className=" flex md:flex-row max-md:flex-col w-full h-min relative">
                    <div className="dark:text-white/50 text-black/50  basis-2/3 w-full h-min ">
                        <p>
                            ви знаєте, як зробити школу або Парламент кращим? У вас є клуб який ви хочете проводити? Запропонуйте нам свою ідею, і, можливо, вона змінить Базис!
                        </p>
                        <SLink href={"#"}>Запропонувати ідею для вебсайту <span className=" dark:text-accent-dark-50 text-accent-light-50">(COMING SOON)</span></SLink>
                        <SLink href={"https://forms.gle/2ZUi8U24jLXP5TBn6"}>Запропонувати ідею до Парламенту</SLink>
                    </div>
                    <PencilSquareIcon className=" basis-1/3 h-1/2 aspect-squere "/>
                    </div>
                </Card>
            </div>
        </div>
    </div>
}
export default Home

