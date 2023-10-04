import { Architecture } from '@/components/architecture'
import { Procedures } from '@/components/procedures'
import { Services } from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#060a23]'>
      <Services/>
      <Architecture />
      <Procedures />
    </div>
  )
}
