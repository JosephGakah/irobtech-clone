import { Images } from '@/lib/images'
import Image from 'next/image'
import React from 'react'

export const Services = () => {
    const images = Images
  return (
    <section>
        <div className='p-8 text-center'>
            <div className=''>
                <div className='absolute left-[50%] z-0'>
                <h2 className='text-[#acb1ea4f] text-[94px] relative left-[-50%]'>What We Do</h2>
                </div>
                <h2 className='text-white text-[56px] pt-[5%]'>Our Services</h2>
                <div className=' mx-[20%]'>
                    <h2 className='text-white text-[22px]'>
                        We work with organizations, businesses, and individuals from various sectors, helping them create and launch products that are utilised by customers across the globe.
                    </h2>
                </div>
            </div>
            <div></div>
        </div>
        <div className='px-[15%] py-[5%] flex flex-col text-center'>
            <div><h2 className='text-[#acb1ea4f] text-[65px] z-0 relative'>Tech</h2></div>
            <div className='grid grid-cols-2 gap-[25px]'>
                <div className='flex flex-col items-left bg-gradient-to-b to-[#0c1033] from-[#2824d5c0] hover:transform scale-105 shadow-[15px, 15px, 36px, 24px] shadow-[#00000038] text-left rounded-[1rem]'>
                    <div className='py-[30px] px-[50px]'>
                        <Image src={images.digcol} alt='' height={150} width={150} className='h-[275px] w-[75%]'/>
                        <h3 className='text-white text-[36px] mb-[15px]'>
                            Digital Modern Products & Software Engineering
                        </h3>
                        <p className='text-white text-[15px]'>
                            Our expertise is creating, connecting, and scaling digital products. We advise, manage, and develop, using agile techniques to ensure on-time and quality delivery.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[25px]'>
                    <div className='col bg-[#ffffff14] rounded-[20px]'>
                        <div className='p-[20px] flex flex-col items-center'>
                            <Image src={images.mob} alt='' height={150} width={150} className='h-[150px]'/>
                            <h3 className='text-white text-[23px] font-[800]'>
                                Mobile <br/> Development
                            </h3>
                        </div>
                    </div>
                    <div className='col bg-[#ffffff14] rounded-[20px] flex flex-col items-center'>
                        <div className='p-[20px]'>
                            <Image src={images.web} alt='' height={150} width={150} className='h-[150px]'/>
                            <h3 className='text-white text-[23px] font-[800]'>
                                Web <br/> Development
                            </h3>
                        </div>
                    </div>
                    <div className='col bg-[#ffffff14] rounded-[20px] flex flex-col items-center'>
                        <div className='p-[20px]'>
                            <Image src={images.uiux} alt='' height={150} width={150} className='h-[150px]'/>
                            <h3 className='text-white text-[23px] font-[800]'>
                                UI/UX<br/>& Branding
                            </h3>
                        </div>
                    </div>
                    <div className='col bg-[#ffffff14] rounded-[20px] flex flex-col items-center'>
                        <div className='p-[20px]'>
                            <Image src={images.cloudsol} alt='' height={150} width={150} className='h-[150px]'/>
                            <h3 className='text-white text-[23px] font-[800]'>
                                Cloud <br/> Solutions
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
