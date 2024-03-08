import React from 'react'
import Image from 'next/image'
import Salon1 from '../img/salon/salon1.webp'
import Salon2 from '../img/salon/salon2.webp'
import Salon3 from '../img/salon/salon3.webp'
import Salon4 from '../img/salon/salon4.webp'
import Salon5 from '../img/salon/salon5.webp'
import Salon6 from '../img/salon/salon6.webp'
import Salon7 from '../img/salon/salon7.webp'
import Salon8 from '../img/salon/salon8.webp'
import Salon9 from '../img/salon/salon9.webp'
import Salon10 from '../img/salon/salon10.webp'
import Salon11 from '../img/salon/salon11.webp'
import Salon12 from '../img/salon/salon12.webp'
import Salon13 from '../img/salon/salon13.webp'



export default function page() {
  return (
    <section className=' w-full py-3  flex justify-center'>
    <section className=' w-full 2xl:container  flex justify-center '>
        <section className=' w-full flex flex-wrap *:w-full justify-center *:text-center   capitalize my-10  '>
            <h6 className=' md:text-4xl text-2xl flex justify-center '>Salón:</h6>
            <div className=' *:lg:w-1/2 *:w-[90%] py-4 flex justify-center'>
                <p>
                El Salón, donde se junta toda la familia a pasar un rato agradable descansando de un día largo de trabajo, intentamos crear un ambiente acogedor y relajante para que disfrutes al lado de tus seres queridos.
                </p>
            </div>
            <section>
                <section className=' w-full flex flex-wrap  *:my-5 justify-center md:justify-evenly '>
                    <figure className=' w-[420px] flex'>

                        <Image className=' w-full h-full object-cover' src={Salon1}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon2}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon3}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon4}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon5}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon6}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon7}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon8}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon9}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon10}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon11}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon12}></Image>
                    </figure>
                    <figure className=' w-[420px]'>

                        <Image className=' w-full h-full object-cover' src={Salon13}></Image>
                    </figure>
             
                
                </section>

            </section>
        </section>
    </section>
</section>

  )
}
