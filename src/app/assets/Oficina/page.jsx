import React from 'react'
import Image from 'next/image'


import ofic1 from '../img/offic/oficina1.webp'
import ofic2 from '../img/offic/oficina2.webp'
import ofic3 from '../img/offic/oficina3.webp'
import ofic4 from '../img/offic/oficina4.webp'
import ofic5 from '../img/offic/oficina5.webp'
import ofic6 from '../img/offic/oficina6.webp'
import ofic7 from '../img/offic/oficina7.webp'
export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Oficina:
</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>
                En el panorama empresarial actual, el trabajo desde casa se ha convertido en una norma. Para aquellos que buscan un entorno de trabajo productivo y cómodo, una reforma de oficina en el hogar es esencial. Como empresa de reformas líder, te ofrecemos soluciones personalizadas para transformar tu espacio en un santuario de productividad.
                </p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={ofic1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic4}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic5}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic6}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={ofic7}></Image>
                    </figure>
                
                
                </section>

            </section>
        </section>
    </section>
</section>
  )
}
