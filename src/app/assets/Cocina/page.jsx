import React from 'react'
import Image from 'next/image'
import Cocina1 from '../img/cocina/cocina1.webp'
import Cocina2 from '../img/cocina/cocina1 (1).webp'
import Cocina3 from '../img/cocina/cocina1 (2).webp'
import Cocina4 from '../img/cocina/cocina1 (3).webp'
import Cocina5 from '../img/cocina/cocina4.webp'
import Cocina6 from '../img/cocina/cocina5.webp'
import Cocina7 from '../img/cocina/cocina6.webp'
import Cocina8 from '../img/cocina/cocina7.webp'
import Cocina9 from '../img/cocina/cocina8.webp'
import Cocina10 from '../img/cocina/cocina9.webp'
import Cocina11 from '../img/cocina/cocina10.webp'
import Cocina12 from '../img/cocina/cocina11.webp'







export default function page() {
    return (
        <section className=' w-full py-3  flex justify-center'>
            <section className=' w-full 2xl:container  flex justify-center '>
                <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
                    <h6 className=' md:text-4xl text-2xl flex justify-center '>Cocina:</h6>
                    <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                        <p>La Cocina, el corazón de tu hogar, tratamos de conectar este espacio al resto de tu casa, reflejando tu estilo individual, Con más luz natural y más sitio de almacenaje posible.</p>
                    </div>
                    <section>
                        <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                            <figure className=' w-[420px] flex'>

                                <Image className=' w-full h-full object-cover' src={Cocina1}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina2}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina3}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina4}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina5}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina6}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina7}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina8}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina9}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina10}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina11}></Image>
                            </figure>
                            <figure className=' w-[420px]'>

                                <Image className=' w-full h-full object-cover' src={Cocina12}></Image>
                            </figure>
                        
                        </section>

                    </section>
                </section>
            </section>
        </section>
    )
}
