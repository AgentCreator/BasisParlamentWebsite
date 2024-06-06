import Link from "next/link";
import Body from "../Footer"
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" data-theme="mytheme">
        <body>
            <Body>
            <Link href="/" className=" dark:bg-black bg-white top-3 left-3 p-2 rounded-xl px-5 absolute -z-10">&larr;</Link>
            <Link href="/" className=" opacity-0 dark:bg-black bg-white top-3 left-3 p-2 cursor-pointer rounded-xl px-5 absolute -z-0 max-md:-z-[0]">&larr;</Link>

            {children}
            <div className=" w-screen bg-gradient-to-b dark:from-accent-dark-200 from-accent-light-200 to-transparent h-80 absolute top-0 -z-20"></div>

            </Body>
        </body>
      </html>
    );
  }
  