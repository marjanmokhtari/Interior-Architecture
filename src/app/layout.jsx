"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import LogoSite from './img/logo.png'
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import '../../node_modules/aos/dist/aos.css'
import '../../node_modules/aos/dist/aos.js'


import Logins from './img/Instagram_icon.png.webp'
import Logemail from './img/Gmail_icon_(2020).svg.png'
import Logtel from './img/tel.png'
import LogWhats from './img/wtsap.png'


Aos.init()
const inter = Inter({ subsets: ["latin"] });



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
          <Myfooter></Myfooter>
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
          <ul className=" flex justify-center items-center *:mx-2 capitalize  w-full">
            <li><Link href={'/'}>inicio</Link></li>
            <li><Link href={'/'}>Páginas</Link></li>
            <li><Link href={'/'}>contacto</Link></li>

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
              <Link href={'tel:+34615951025'}
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className=" ps-3 font-bold">Telf:+34 615951025</Link>
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


function Myfooter() {
  return (
    <section className=" w-full py-2  bg-[#f4e2c7] flex justify-center">
      <section className=" w-full flex flex-wrap 2xl:container ">
        <section className=" w-full flex flex-wrap px-28 py-20">
          <section className=" w-full lg:w-1/3 ">
            <section className=" flex ">
              <figure className=" w-[120px]">
                <Image className=" w-full h-full object-cover " src={LogoSite}></Image>
              </figure>
            </section>
            <section>
              <section className=" flex text-3xl  *:me-5 *:*:w-[30px] my-3">
                <Link href={'mailto:reformasshik@gmail.com'}>
                  <Image src={Logemail}></Image>
                </Link>
                <Link href={'https://www.instagram.com/reformasshik'}>
                  <Image src={Logins}></Image>
                </Link>
                <Link href={'tel:+34615951025'}>
                  <Image src={Logtel}></Image>
                </Link>
                <Link href={'https://wa.me/34615951025'}>
                  <Image src={LogWhats}></Image>
                </Link>
              </section>
            </section>
          </section>
          <section className=" w-full lg:w-2/3 ">
            <section className=" flex *:mx-8 ">
             <nav>
              <ul className=" *:my-2">
                <li className=" font-semibold text-xl">Páginas</li>
                <li><Link href={'/'}>Inicio</Link></li>
                <li>Contacto</li>
              </ul>
             </nav>
             <nav>
                <ul className=" *:my-2 cursor-pointer">
                  <li className=" font-semibold text-xl ">Páginas</li>
                  <li><Link href={'/Cocina'}>Cocina</Link></li>
                  <li><Link href={'/Dormitorio'}>Dormitorio</Link></li>
                  <li><Link href={'/Salon'}>Salón</Link></li>
                  <li><Link href={'/bathroom'}>Baño</Link></li>
                  
                </ul>
             </nav>
             <nav>
                <ul className=" *:my-2">
                  <li className=" font-semibold text-xl ">Páginas</li>
                  <li><Link href={'/Entrada'}>Entrada</Link></li>
                  <li><Link href={'/Oficina'}>Oficina</Link></li>
                  <li><Link href={'/Comedor'}>Comedor</Link></li>
                           
                </ul>
             </nav>
            </section>
          </section>
        </section>


        <section></section>
      </section>
    </section>
  )
}