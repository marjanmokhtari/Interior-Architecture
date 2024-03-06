import React from 'react'
import '../../globals.css'
import Img1 from '../img/img1.webp'
import Img2 from '../img/img2.webp'
import Img3 from '../img/img3.webp'
import Img4 from '../img/img4.webp'
import Image from 'next/image'



export default function Thirdrow() {
  return (
    <section className=' w-full '>
      <section className=' w-full bg2 relative flex justify-center'>
        <section className=' w-full h-full absolute z-10 left-0 top-0 bg-[#101010d1]'></section>
        <section className=' w-full 2xl: container lx:px-28 px-5 z-20'>
            <section className=' pt-20 text-white px-4'>
                <h6>YOUR DREAM KITCHEN AWAITS</h6>
                <h6 className=' text-3xl font-semibold py-2'>Professional Collections</h6>
            </section>

            <section className=' py-20'>
                <section className=' flex *:w-full flex-wrap md:flex-nowrap *:mx-4 *:my-4 *:md:w-1/4 *:*:h-[300px] *:*:object-cover'>
                    <section>
                        <Image src={Img1}></Image>
                    </section>
                    <section>
                        <Image src={Img2}></Image>
                    </section>
                    <section>
                        <Image src={Img3}></Image>
                    </section>
                    <section>
                        <Image src={Img4}></Image>
                    </section>
                </section>
            </section>
        </section>
      </section>
    </section>
  )
}
