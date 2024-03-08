import React from 'react'
import Image from 'next/image'
import endpic from '../img/pic1 (1).webp'
export default function Sixrow() {
  return (
    <section className=' w-full  flex justify-center '>
      <section className=' w-full 2xl:container flex justify-center my-20'>
        <section className=' w-full flex flex-wrap lg:px-28 px-12'>
            <section className=' w-full lg:w-2/4  flex justify-center'>
                <figure>
                    <Image src={endpic}></Image>
                </figure>
            </section>
            <section className=' w-full lg:w-2/4 flex items-center my-8 lg:my-0 order-first lg:order-last text-center lg:text-start leading-9 '>
                <p className=' lg:ps-10 ps-0'>
                Una combinación de diseño personalizado y una ejecución cuidadosa, te proporciona una experiencia única de la reforma de tu hogar. Basándonos en tu visión, te presentamos propuestas de diseño que fusionan estilo, confort y practicidad. En este paso, ajustamos los detalles hasta que el proyecto refleje completamente tus expectativas.
                </p>
            </section>

        </section>
      </section>
    </section>
  )
}
