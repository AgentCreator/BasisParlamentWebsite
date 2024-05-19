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
            {children}
            <div className=" w-screen bg-gradient-to-b dark:from-accent-dark-200 from-accent-light-200 to-transparent h-80 absolute top-0 -z-10"></div>

            </Body>
        </body>
      </html>
    );
  }
  