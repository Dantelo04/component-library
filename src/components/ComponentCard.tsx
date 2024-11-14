import React from 'react'
import { BiClipboard } from 'react-icons/bi'

interface ComponentCardProps {
    title:string,
    children: React.ReactNode
}

const ComponentCard = ({title, children}:ComponentCardProps) => {
return (
    <div className='flex flex-col gap-3 md:text-start text-center border rounded-xl border-neutral-900 p-4'>
        <h1 className='border-b py-2 border-neutral-900'>{title}</h1>
        <div>
            {children} 
        </div>
        <button className='inline-flex w-fit hover:bg-white hover:text-black transition-all items-center rounded py-2 px-3 bg-neutral-700'>
            <BiClipboard className='w-5 h-5'></BiClipboard>
        </button>
    </div>
)
}

export default ComponentCard
