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
            <div className=''>
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
          <div className='z-1 grid grid-cols-2'>
            <div className=''>
              <div className='relative p-0'>
                <h2 className='text-[#acb1ea4f] text-[12rem] font-[800]'>B</h2>
                <div className='absolute bottom-28 pb-3'>
                  <h2 className='text-white text-[12px]'>DEVELOPMENT</h2>
                </div>
              </div>
              <div>
                <h1  className='text-white text-[30px] font-[800]'>Stable & Latest Technologies</h1>
                <p className='text-[16px]'>
                  Using cutting edge modern technologies requires a spirit of innovation and experimentation. We always focus on creating user friendly, intuitive, engaging and remarkable experience by using practicality alongside our cutting-edge technology.
                </p>
              </div>
            </div>
            <div className=''>
              <Image src={Images.rotate} alt='' width={200} height={200}></Image>
            </div>
          </div>
          <div className='z-1 grid grid-cols-2'>
            <div className=''>
              <Image src={Images.timeline} alt='' width={200} height={200}></Image>
            </div>
            <div className=''>
              <div className='relative p-0'>
                <h2 className='text-[#acb1ea4f] text-[12rem] font-[800]'>C</h2>
                <div className='absolute bottom-28 pb-3'>
                  <h2 className='text-white text-[12px]'>PROCEDURE</h2>
                </div>
              </div>
              <div>
                <h1  className='text-white text-[30px] font-[800]'>Timeliness & Clear Process</h1>
                <p className='text-[16px]'>
                  Our team use modern and agile project management techniques to ensure efficiency. You get access to information of our progress anytime when we are handling your project.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
