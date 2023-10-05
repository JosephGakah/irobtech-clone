import Image from 'next/image'
import React from 'react'

export default function OurTeam(){
  return (
    <section className='bg-[#060a23] py-[125px] px-[35px]'>
        <div className='h-min-[45vh]'>
            <div className='mx-[10%] pt-[100px]'>
                <div className='mb-[10px] text-center'>
                    <h2 className='text-white text-[50px] font-[400]'>IRob-Tech <span className='font-[800]'>Team</span></h2>
                </div>
            </div>
            <div className='flex flex-wrap justify-center w-[92vh] my-[26px] mx-[2em] text-[#a0bbd1]'>
                <div className='w-[25em] p-[1em] text-center'>
                    <Image src={''} alt={''}/>
                </div>
            </div>
        </div>
    </section>
  )
}
