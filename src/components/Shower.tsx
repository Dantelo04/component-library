import React from 'react'
import Card from './Card'

const Shower = () => {
    return (
        <section>
            <div className='md:container px-5 grid md:grid-cols-3 grid-cols-1 gap-5 rounded-xl p-10 border-neutral-800'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </section>
    )
}

export default Shower
