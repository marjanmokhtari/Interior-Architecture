import React from 'react'
import Pic1 from '../img/pic1 (1).webp'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";



export default function Secendrow() {
  return (
    <section className=' w-full  flex justify-center'>
        <section className=' w-full flex justify-center 2xl:container my-20 '>
            <section className=' flex *:md:w-1/2 flex-wrap *:w-full w-full justify-center  px-12 lg:px-28 '>
                <section className='flex mb-10 md:mb-0'>
                    <section className=' flex flex-wrap content-start pe-10 pt-10 *:w-full'>
                        <h3 className=' text-3xl'>Creando hogares acogedores</h3>
                        <p className=' py-5'>Con 15 años de experiencia y pasión para crear unos espacios increíbles; Teniendo en cuenta la funcionalidad y el estilo que buscas. Desde el principio del diseño hasta terminar la obra nuestro equipo trabaja contigo para convertir tu visión a realidad.</p>
                        <p className=' pb-5'>Diseño de interiores acompañado con fotos 3D de tu hogar para elegir el estilo que te guste</p>
                        <div className=' flex items-center  my-1'>
                            <FaLocationDot className=' me-2'></FaLocationDot>
                            <span>Madrid- España </span>
                        </div>
                        <div className=' flex items-center my-1'>
                            <BsTelephoneFill className=' me-2'></BsTelephoneFill>
                            <span>+34 615951025</span>
                        </div>
                        <div className=' flex items-center my-1'>
                            <IoLogoWhatsapp className=' me-2'></IoLogoWhatsapp>
                            <span>+34 615951025</span>
                        </div>
                        <div className=' flex items-center my-1'>
                            <RiInstagramFill className=' me-2'></RiInstagramFill>
                            <span>@reformasshik</span>
                        </div>
                        <div className=' flex items-center my-1'>
                            <MdEmail className=' me-2'></MdEmail>
                            <span>reformasshik@gmail.com</span>
                        </div>
                    </section>
                </section>

                <section>
                    <figure>
                        <Image src={Pic1}></Image>
                    </figure>
                </section>
            </section>
        </section>
    </section>
  )
}
