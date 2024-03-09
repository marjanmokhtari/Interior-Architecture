import React from 'react'
import Pic1 from '../img/pic1 (1).webp'
import Image from 'next/image'
import Link from 'next/link';
import Ins from '../img/Instagram_icon.png.webp'
import Wtasp from '../img/wtsap.png'
import Gmaill from '../img/Gmail_icon_(2020).svg.png'
import Tel from '../img/tel.png'
import Mapgogle from '../img/map.png'

export default function Secendrow() {
  return (
    <section className=' w-full  flex justify-center'>
        <section className=' w-full flex justify-center 2xl:container my-20 '>
            <section className=' flex *:md:w-1/2 flex-wrap *:w-full w-full justify-center  px-12 lg:px-28 '>
                <section className='flex mb-10 md:mb-0'>
                    <section className=' flex flex-wrap content-start pe-10 pt-10 *:w-full'>
                        
                        <p className=' py-5'>Con 15 años de experiencia y pasión para crear unos espacios increíbles; Teniendo en cuenta la funcionalidad y el estilo que buscas. Desde el principio del diseño hasta terminar la obra nuestro equipo trabaja contigo para convertir tu visión a realidad.</p>
                        <p className=' pb-5'>Diseño de interiores acompañado con fotos 3D de tu hogar para elegir el estilo que te guste.</p>
                        <div className=' flex items-center  my-1'>
                            <Image width={100} height={100} src={Mapgogle} className=' object-cover  w-[30px] me-2'></Image>
                            <span>Madrid- España </span>
                        </div>
                        <div className=' flex items-center my-1'>
                            <Image src={Tel} width={100} height={100} className=' object-cover  w-[30px] me-2'></Image>
                            <Link href={'tel:+34615951025'}>+34 615951025</Link>
                        </div>
                        <div className=' flex items-center my-1'>
                            <Image width={100} height={100} src={Wtasp} className=' object-cover  w-[30px] me-2'></Image>
                            <Link href={'https://wa.me/34615951025'}>+34 615951025</Link>
                        </div>
                        <div className=' flex items-center my-1'>
                            <Image width={100} height={100} src={Ins} className=' object-cover  w-[30px] me-2'></Image>
                            <Link href={'https://www.instagram.com/reformasshik'}>@reformasshik</Link>
                           
                        </div>
                        <div className=' flex items-center my-1'>
                            <Image width={100} height={100} src={Gmaill} className=' object-cover  w-[30px] me-2'></Image>
                            <Link href={'mailto:reformasshik@gmail.com'}>reformasshik@gmail.com</Link>
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
