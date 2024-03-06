import React from 'react'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import Image from 'next/image'


export default function Fourthrow() {
    return (
        <section className=' w-full flex justify-center my-20'>

            <section className=' w-full 2xl:container flex justify-center px-12 lg:px-28'>
                <section className=' flex justify-evenly *:lg:w-1/3 *:w-full flex-wrap w-full py-10 *:my-4 lg:my-0'>
                    <section>
                        <section className=' flex items-start lg:flex-nowrap flex-wrap text-center *:lg:text-start  '>
                            <section className='w-full flex justify-center lg:justify-end'>
                                <Image src={icon1}></Image>
                            </section>
                            <section className=' flex flex-wrap '>
                                <p className=' w-full  font-bold'>We Have Expert and Personable Team</p>
                                <p className=' w-full '>Achieving excellence through results-driven solutions and personalized service</p>
                            </section>
                        </section>
                    </section>


                    <section>
                        <section className=' flex items-start lg:flex-nowrap flex-wrap text-center *:lg:text-start  '>
                            <section className='w-full flex justify-center lg:justify-end'>
                                <Image src={icon2}></Image>
                            </section>
                            <section className=' flex flex-wrap '>
                                <p className=' w-full  font-bold'>We Have Expert and Personable Team</p>
                                <p className=' w-full '>Achieving excellence through results-driven solutions and personalized service</p>
                            </section>
                        </section>
                    </section>


                    <section>
                        <section className=' flex items-start lg:flex-nowrap flex-wrap text-center *:lg:text-start  '>
                            <section className='w-full flex justify-center lg:justify-end'>
                                <Image src={icon3}></Image>
                            </section>
                            <section className=' flex flex-wrap '>
                                <p className=' w-full  font-bold'>We Have Expert and Personable Team</p>
                                <p className=' w-full '>Achieving excellence through results-driven solutions and personalized service</p>
                            </section>
                        </section>
                    </section>
             
                </section>
            </section>
        </section>
    )
}
