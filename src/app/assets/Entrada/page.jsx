import React from 'react'
import Image from 'next/image'
import Entrada1 from '../img/Entrada/Entrada1.webp'
import Entrada2 from '../img/Entrada/Entrada2.webp'
import Entrada3 from '../img/Entrada/Entrada3.webp'
import Entrada4 from '../img/Entrada/Entrada4.webp'
export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Entrada:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>
                La entrada de tu hogar que sea grande o pequeña, creamos una zona agradable y funcional con la sensación de ser bienvenido a quien entre en tu casa.
                </p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={Entrada1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Entrada2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Entrada3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Entrada4}></Image>
                    </figure>
                 
             
                </section>

            </section>
        </section>
    </section>
</section>
)
}
