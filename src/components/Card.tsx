import React from 'react'
import { BiClipboard } from 'react-icons/bi'

const Card = () => {
    return (
        <div className='border flex flex-col gap-2 rounded-xl min-h-32 border-neutral-800 p-5'>
            <div className='flex font-mono justify-center items-center min-h-40 aspect-square rounded-xl bg-neutral-900/50'>
                Here goes component
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl'>Name of component</h1>
                <div className='text-sm text-neutral-500 text-justify'>
                    Description of what the code or component does Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className='flex justify-center'>
                    <button className='inline-flex hover:bg-white hover:text-black transition-all text-sm justify-center items-center rounded py-1 px-3 bg-neutral-700 tracking-tight gap-2'>
                        <span>Copy code</span><BiClipboard className='w-3 h-3'></BiClipboard>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
