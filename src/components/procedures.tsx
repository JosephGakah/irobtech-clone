import React from 'react'
import Image from 'next/image'
import { Images } from '@/lib/images'

export const Procedures = () => {
  return (
    <section>
        <div className='p-8 text-center'>
            <div className=''>
                <div className='absolute left-[50%] z-0'>
                  <h2 className='text-[#acb1ea4f] text-[94px] relative left-[-50%]'>What We Do</h2>
                </div>
                <h2 className='text-white text-[56px] pt-[5%]'>Procedure</h2>
            </div>
        </div>
        <div className='px-[15%] py-[5%]'>
            <div className='z-1 grid grid-cols-2'>
                <div className=''>
                  <Image src={Images.clockSvg} alt='' width={200} height={200}></Image>
                </div>
                <div>
                  <div className='relative p-0'>
                    <h2 className='text-[#acb1ea4f] text-[12rem] font-[800]'>A</h2>
                    <div className='absolute bottom-28 pb-3'>
                      <h2 className='text-white text-[12px]'>DESIGN</h2>
                    </div>
                  </div>
                  <div>
                    <h1  className='text-white text-[30px] font-[800]'>Experience & Artistic</h1>
                    <p className='text-[16px]'>
                        Our Architects and Software Engineers keep our clients and their behavior in mind to come up with the right balance between the beauty and the beast.
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
