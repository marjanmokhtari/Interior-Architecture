"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import LogoSite from '../app/assets/img/logo.png'
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import '../../node_modules/aos/dist/aos.css'
import '../../node_modules/aos/dist/aos.js'






Aos.init()
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

  function closeMenu() {
    setIsMenuopen(false)
  }

  return (
    <header className=" w-full flex justify-center items-center">
      <section className=" w-full flex items-center justify-between 2xl:container  px-4 py-2 relative ">
        <section className=" w-1/4">
          <section>
            <Image className=" md:w-[80px] w-[50px] rounded-full " src={LogoSite} width={1000} height={100}></Image>
          </section>
        </section>
        <nav className=" w-2/4  items-center hidden md:flex">
          <ul className=" flex justify-center items-center *:mx-2  w-full">
            <li><Link href={'/'}>pages</Link></li>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/'}>blog</Link></li>
            <li><Link href={'/'}>produt</Link></li>
            <li><Link href={'/'}>produt</Link></li>
            <li><Link href={'/'}>Contact Us</Link></li>
          </ul>
        </nav>
        <section className=" md:w-1/4 w-2/4">
          <span className=" flex md:justify-end justify-center text-sm flex-wrap *:w-full">
            <span>
              PIDE PRESUPUESTO SIN COMPROMISO</span>
            <div className=" flex  items-center ">
              <FaArrowRight 
              
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
         
              className=" text-2xl"></FaArrowRight>
              <span 
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              className=" ps-3 font-bold">Telf:+34 615951025</span>
            </div>

          </span>
        </section>
        <span className=" w-1/4 flex justify-end md:hidden text-2xl">
          <span onClick={openMenu}>
            <TbMenu></TbMenu>
          </span>
        </span>
        <section ref={menu_mobile} className={` absolute w-full min-h-[100vh]  z-50 left-0 top-0 bg-white md:hidden ${isMenuopen ? 'flex' : 'hidden'}`}>
          <section className=" w-full   p-5">
            <section className=" w-full flex justify-end">
              <IoCloseSharp onClick={closeMenu} className=" flex justify-end text-4xl "></IoCloseSharp>
            </section>
            <section className=" w-full pt-10">
              <nav className=" w-full ">
                <ul className=" capitalize w-full flex *:w-full flex-wrap  *:flex *:justify-center *:my-4 items-center">
                  <li><Link href={'/'}>inicio </Link></li>
                  <li><Link href={'/'}>Páginas</Link></li>
                  <li><Link href={'/'}>contacto</Link></li>
                </ul>
              </nav>
            </section>
          </section>
        </section>
      </section>
    </header>
  )
}