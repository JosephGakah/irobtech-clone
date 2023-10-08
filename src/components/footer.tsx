import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='max-w-[1140px] m-auto'>
                <div className='flex justify-center py-[10px] px-[15x] bg-white rounded-[10px]'>
                    <div className='flex flex-wrap w-[65%]'>
                        <div className='py-[20px] px-[40px]'>
                            <p className="w-[80%] text-[#060515] text-[22px] font-[400]">
                                We solve your problems with amazing latest technologies
                            </p>
                        </div>
                    </div>
                    <div className='w-[35%]'>
                        <div className='py-[20px] px-[40px] flex justify-end uppercase'>
                            <Link className='button bg-[#01106d] text-[13px] py-[18px] px-[34px] rounded-[25px] text-white' href={''}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section>

        </section>
    </footer>
  )
}
