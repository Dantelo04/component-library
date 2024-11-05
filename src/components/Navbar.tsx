"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenu } from 'react-icons/cg'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={`sticky top-0 border-b border-neutral-900/50 backdrop-blur-lg duration-500 ease-in-out overflow-hidden transition-height ${isOpen ? "h-screen":"h-18"}`}>
            <div className='container flex justify-between items-center py-3'>
                <div className='text-xl'><Link href={"/"}>Logo</Link></div>
                <ul className={`md:flex hidden justify-center items-center gap-14 text-neutral-500`}>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Home</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>About</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Clients</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Billing</Link></li>
                </ul>
                <button className='md:inline-flex hidden hover:bg-white hover:text-black transition-all bg-neutral-700 text-sm rounded text-neutral-200 py-1 px-3'>
                    Contact
                </button>
                <button onClick={()=>setOpen(!isOpen)} className='md:hidden inline-flex'>
                    <CgMenu className='w-9 h-auto'></CgMenu>
                </button>
            </div>
            <div className='relative container flex justify-center'>
                <ul className={`flex flex-col md:hidden absolute top-0 justify-center items-center gap-8 py-10 text-xl text-neutral-500`}>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Home</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>About</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Clients</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Billing</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
