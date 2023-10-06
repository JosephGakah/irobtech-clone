import React from 'react'
import Image from 'next/image'
import { Images } from '@/lib/images'

export default function About(){
  return (
    <>
        <section className='py-[150px] px-[35px] bg-white'>
            <div className='flex justify-center '>
                <div className='pt-[100px] ml-[10%] mr-[5%] w-[60%]'>
                    <h1 className='text-[#060515] text-[40px] font-[400] leading-[1.2em] mb-[20px]'>
                        LOOKING TO
                        <span className='font-[900]'> DEVELOP & INSPIRE </span> A 
                        <span className='font-[900]'> WORLD</span> OF 
                        <span className='text-[#2824d5] font-[900]'> CUTTING-EDGE </span> 
                        PRODUCTS & SERVICES
                    </h1>
                    <p className='text-[#060515] text-[20px] font-[400] leading-[1.3em]'>
                        At iROB we appreciate the trust you put in us when you hand us the keys to your business kingdom.
                        Weve earned that trust from hundreds of clients in dozens of industries. 
                        We have been a company that specializes in provision of innovations and consultancies in architecture and software,
                        and we know we can earn it from you. Our team consists of strategic thinkers with experience in engineering, IT and business. 
                        We do our homework, and make sure we understand your business goals before working with you to set technology goals. 
                        Our specialty is custom-made solutions for how you work, sell, and grow. 
                        We think this is important, because at the end of the day, our services are about the people, not computers.
                    </p>
                </div>
                <div className='w-[40%]'></div>
            </div>
        </section>
        <section className='py-[80px] h-[100vh] flex items-center max-w-[1140px] m-auto'>
            <div className='p-[10px]'>
                <h2 className='text-[#fff] text-[30px] font-[400] leading-[1.3em] text-center tracking-[1.8px]'>
                    At iROB we appreciate the trust you put in us when you hand us the keys to your business kingdom. 
                    We ve earned that trust from hundreds of clients in dozens of industries. We have been a company that specializes in provision of innovations and consultancies in architecture and software, and we know we can earn it from you. 
                    Our team consists of strategic thinkers with experience in engineering, IT and business. 
                    We do our homework, and make sure we understand your business goals before working with you to set technology goals. 
                    Our specialty is custom-made solutions for how you work, sell, and grow. We think this is important, 
                    because at the end of the day, our services are about the people, not computers.
                </h2>
            </div>
        </section>
        <section className='py-[70px] bg-white'>
            <div className='max-w-[1140px] m-auto'>
                <div className='grid grid-cols-2'>
                    <div className='p-[10px]'>
                        <div className='mt-[19px] mb-[80px]'>
                            <h2 className='text-[#000] text-[80px] font-[900] leading-none'>Why<br/>Choose<br/>Us?</h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mb-[20px]'>
                        <div className='flex mb-[100px]'>
                            <Image src={Images.lineA} alt={''} width={125} height={125} 
                                className='mr-[35px] relative block top-[-22px]'
                            />
                            <div>
                                <h2 className='text-[#060515] text-[30px] font-[900] mt-2 mb-4'>Vision</h2>
                                <p className='text-[#060515] text-[15px]'>
                                    To deliver quality services both software, hardware and architectural designs to our clients.
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className='mb-[20px]'>
                            <div className='flex mb-[100px]'>
                                <Image src={Images.lineB} alt={''} width={125} height={125} 
                                    className='mr-[35px] relative block top-[-22px]'
                                />
                                <div>
                                    <h2 className='text-[#060515] text-[30px] font-[900] mt-2 mb-4'>Mission</h2>
                                    <p className='text-[#060515] text-[15px]'>
                                        Ensuring that products are of outstanding quality, value for money and instill pride of ownership.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-[20px]'>
                            <div className='flex mb-[100px]'>
                                <Image src={Images.lineC} alt={''} width={125} height={125} 
                                    className='mr-[35px] relative block top-[-22px]'
                                />
                                <div>
                                    <h2 className='text-[#060515] text-[30px] font-[900] mt-2 mb-4'>Core values</h2>
                                    <p className='text-[#060515] text-[15px]'>
                                        Trust | Integrity | Timeliness
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>    
  )
}
