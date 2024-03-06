"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import LogoSite from '../app/assets/img/logo.png'
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { useRef, useState } from "react";



const inter = Inter({ subsets: ["latin"] });

//  export const metadata = {
//   title: "Reformas shik",
//   description: "Diseño de interiores ",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Reformas Shik</title>
      </head>
      <body className={inter.className}>
        <main>
          <Header_site></Header_site>
          {children}
        </main>
      </body>
    </html>
  );
}

function Header_site() {

  const [isMenuopen, setIsMenuopen] = useState(false)
  const menu_mobile = useRef()

  function openMenu() {
    setIsMenuopen(!isMenuopen)
  }

  return (
    <header className=" w-full flex justify-center items-center">
      <section className=" w-full flex items-center justify-between 2xl:container  px-4 py-2 relative ">
        <section className=" w-1/4">
          <section>
            <Image className=" w-[70px] rounded-full " src={LogoSite} width={1000} height={100}></Image>
          </section>
        </section>
        <nav className=" w-2/4  items-center hidden md:flex">
          <ul className=" flex justify-center items-center *:mx-2  w-full">
            <li><Link href={'/'}>pages</Link></li>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/'}>blog</Link></li>
            <li><Link href={'/'}>produt</Link></li>
            <li><Link href={'/'}>produt</Link></li>
            <li><Link href={'/'}>produt</Link></li>
          </ul>
        </nav>
        <section className=" md:w-1/4 w-2/4">
          <span className=" flex md:justify-end justify-center">
            Telf:+34 615951025
          </span>
        </section>
        <span className=" w-1/4 flex justify-end md:hidden text-2xl">
          <span onClick={openMenu}>
            <TbMenu></TbMenu>
          </span>
        </span>
        <section ref={menu_mobile} className={` absolute w-full h-full z-20 left-0 top-0 bg-white md:hidden ${isMenuopen ?'flex':'hidden'}`}>
            <section className=" w-full border border-fuchsia-400 py-2">

            </section>
        </section>
      </section>
    </header>
  )
}