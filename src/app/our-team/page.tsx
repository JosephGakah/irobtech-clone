import Image from 'next/image'
import React from 'react'
import TeamMember from './components/team'
import { Team } from '@/lib/team'

export default function OurTeam(){
  const members = [
    Team.handarob, Team.kenkor, Team.ouksher, Team.cyprnab, Team.jeffoti, Team.neljr, Team.bryochola, 
  ]

  return (
    <section className='bg-[#060a23] py-[125px] px-[35px]'>
        <div className=''>
            <div className='mx-[10%] pt-[100px] h-[45vh]'>
                <div className='mb-[10px] text-center'>
                    <h2 className='text-white text-[50px] font-[400]'>IRob-Tech <span className='font-[800]'>Team</span></h2>
                </div>
            </div>
            <div className='flex flex-wrap justify-center my-[26px] mx-[2em] text-[#a0bbd1]'>
                { members.map((member, index) => 
                    <TeamMember key={index} name={member.name} role={member.role} description={member.description} imgsrc={member.imgsrc} />
                )}
            </div>
        </div>
    </section>
  )
}
