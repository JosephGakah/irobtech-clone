import { Images } from '@/lib/images'
import Image from 'next/image'
import React from 'react'

export const Architecture = () => {
    const images = Images
    return (
    <div>
        <div className='px-[15%] py-[5%] flex flex-col text-center'>
            <div><h2 className='text-[#acb1ea4f] text-[65px] z-0 relative'>Architecture</h2></div>
            <div className='flex justify-center gap-[25px]'>
                <div className='flex flex-col items-left bg-gradient-to-b to-[#0c1033] from-[#2824d5c0] hover:transform scale-105 shadow-[15px, 15px, 36px, 24px] shadow-[#00000038] text-left rounded-[1rem] w-[66%]'>
                    <div className='py-[30px] px-[50px]'>
                        <Image src={images.digcol} alt='' height={150} width={150} className='h-[275px] w-[75%]'/>
                        <h3 className='text-white text-[36px] mb-[15px] font-[800]'>
                            Architecture
                        </h3>
                    </div>
                </div>
                <div className='w-[33%]'>
                    <div className='col bg-[#ffffff14] rounded-[20px]'>
                        <div className='p-[20px] flex flex-col items-center'>
                            <Image src={images.mob} alt='' height={150} width={150} className='h-[150px]'/>
                            <h3 className='text-white text-[23px] font-[800]'>
                                Mobile <br/> Development
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
