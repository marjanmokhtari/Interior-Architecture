import React from 'react'
import Image from 'next/image'


import Comedor1 from '../img/Comedor/Comedor1.webp'
import Comedor2 from '../img/Comedor/Comedor2.webp'
import Comedor3 from '../img/Comedor/Comedor3.webp'
import Comedor4 from '../img/Comedor/Comedor4.webp'
import Comedor5 from '../img/Comedor/Comedor5.webp'

export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Comedor:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>
                El comedor es más que un simple sitio para comer; es un punto de encuentro donde las familias se reúnen, comparten y crean recuerdos. Por eso, entendemos la importancia de una reforma que no solo renueve su estética, sino que también mejore su funcionalidad y armonía.                </p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={Comedor1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Comedor2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Comedor3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Comedor4}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Comedor5}></Image>
                    </figure>
                 
             
                </section>

            </section>
        </section>
    </section>
</section>
  )
}
