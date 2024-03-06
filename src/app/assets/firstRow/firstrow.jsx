import React from 'react'
import '../../globals.css'
export default function firstrow() {
    return (
        <section className=' w-full'>
            <section className=' w-full mybg flex justify-center min-h-[90vh]  relative'>
                <section className=' absolute w-full h-full bg-[#121212a4] left-0 top-0 z-20'></section>
                <section className=' w-full 2xl:container flex flex-wrap content-center  py-5   justify-center z-30'>
                    <div className=' w-full px-10 md:w-1/2 md:px-0'>
                        <h1 className=' text-center text-white text-3xl md:text-4xl'>Reformas Shik, Reformas integrales de Viviendas en la comunidad de Madrid</h1>
                    </div>
                    <div className=' w-full flex justify-center *:w-1/2 *:text-center text-white py-3'>
                        <h2>Diseño de interiores acompañado con fotos 3D de tu hogar para elegir el estilo que te guste</h2>
                    </div>
                    
                </section>
            </section>
        </section>
    )
}
