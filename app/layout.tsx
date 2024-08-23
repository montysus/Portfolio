import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-black"
    >
      <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto">
        <Image src={"https://img2.wallspic.com/crops/3/1/9/5/7/175913/175913-patron-en_blanco_y_negro-diseno-gris-arte-1366x768.jpg"} alt='background' className='z-index-[-1]' fill />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
