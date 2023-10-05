import Image from 'next/image'

interface TeamMemberProps{
    name: string,
    role: string,
    description: string,
    imgsrc: string,
}


export default function TeamMember(
    props: TeamMemberProps){

    return(
        <div className='w-[25em] p-[1em] text-center'>
            <Image 
                src={props.imgsrc} alt={props.name} width={342} height={342}
                className=' rounded-[50%] w-[342px] h-[342px]'
            />
            <h2 className='text-[1.5rem] font-bold mb-[0.9rem] mt-2'>{props.name}</h2>
            <p className='mb-[0.9rem] text-[1rem] mt-2'>{props.role}</p>
            <p className='mb-[0.9rem] text-[1rem] mt-2'>{props.description}</p>
        </div>
    )
}