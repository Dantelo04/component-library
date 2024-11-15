import React from 'react'

const Card = () => {
    return (
        <div className='border flex flex-col gap-2 rounded-xl min-h-32 border-neutral-800 p-5'>
            <div className='flex font-mono justify-center items-center min-h-40 aspect-square rounded-xl bg-neutral-900/50'>
                Here goes an image
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl'>Name of component</h1>
                <div className='text-sm text-neutral-500 text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum amet officiis tenetur blanditiis,
                    ab quidem labore quasi quisquam ut.
                </div>
                <div className='flex justify-center'>
                    <button className='inline-flex w-full hover:bg-white hover:text-black transition-all justify-center items-center rounded py-2 px-3 bg-neutral-700 tracking-tight gap-2'>
                        Check out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
