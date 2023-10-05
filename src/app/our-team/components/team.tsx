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
                className=' rounded-[50%]'
            />
            <h2 className='text-[1.5rem] font-bold'>{props.name}</h2>
            <p className='mb-[0.9rem] text-[1rem]'>{props.role}</p>
            <p className='mb-[0.9rem] text-[1rem]'>{props.description}</p>
        </div>
    )
}