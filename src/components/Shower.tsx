import React from 'react'
import Navbar from './Navbar'
import ComponentCard from './ComponentCard'
import Card from './Card'
import Footer from './Footer'

const Shower = () => {
    return (
        <section>
            <div className='md:container px-5 flex flex-col gap-20 rounded-xl p-10 border-neutral-800'>
                <ComponentCard title='Classic Responsive Navbar'>
                    <Navbar></Navbar>
                </ComponentCard>
                <ComponentCard title='Classic Card'>
                    <div className='grid md:grid-cols-3 gap-3'>
                        <Card></Card>
                        <div className='md:flex hidden'><Card></Card></div>
                        <div className='md:flex hidden'><Card></Card></div>
                    </div>
                </ComponentCard>
                <ComponentCard title='Classic Minimalistic Footer'>
                    <Footer></Footer>
                </ComponentCard>
            </div>
        </section>
    )
}

export default Shower
