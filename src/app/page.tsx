import { Architecture } from '@/components/architecture'
import { Procedures } from '@/components/procedures'
import { Services } from '@/components/services'

export default function Home() {
  return (
    <div className='bg-[#060a23]'>
      <Services/>
      <Architecture />
      <Procedures />
    </div>
  )
}
