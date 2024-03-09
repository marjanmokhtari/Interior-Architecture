import React from 'react'
import Image from 'next/image'



import Dorm1 from '../img/Dormitorio/dorm1.webp'
import Dorm2 from '../img/Dormitorio/dorm2.webp'
import Dorm3 from '../img/Dormitorio/dorm3.webp'
import Dorm4 from '../img/Dormitorio/dorm4.webp'
import Dorm5 from '../img/Dormitorio/dorm5.webp'
import Dorm6 from '../img/Dormitorio/dorm6.webp'
import Dorm7 from '../img/Dormitorio/dorm7.webp'
import Dorm8 from '../img/Dormitorio/dorm8.webp'
import Dorm9 from '../img/Dormitorio/dorm9.webp'
import Dorm10 from '../img/Dormitorio/dorm10.webp'
import Dorm12 from '../img/Dormitorio/dorm12.webp'
import Dorm13 from '../img/Dormitorio/dorm13.webp'
import Dorm14 from '../img/Dormitorio/dorm14.webp'
import Dorm15 from '../img/Dormitorio/dorm15.webp'
import Dorm16 from '../img/Dormitorio/dorm16.webp'
import Dorm17 from '../img/Dormitorio/dorm17.webp'


export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Dormitorio:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>El dormitorio, el ambiente más relajante para tener un sueño reparador y quitar el cansancio del cuerpo y del alma.</p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={Dorm1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm4}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm5}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm6}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm7}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm8}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm9}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm10}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm12}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm13}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm14}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm15}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm16}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Dorm17}></Image>
                    </figure>
                
                </section>

            </section>
        </section>
    </section>
</section>
)
}
