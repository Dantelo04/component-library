import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='sticky top-0 border-b border-neutral-900/50 backdrop-blur-lg'>
            <div className='container flex justify-between items-center py-3'>
                <div className='text-xl'><Link href={"/"}>Logo</Link></div>
                <ul className='md:flex hidden justify-center items-center gap-14 text-neutral-500'>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Home</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>About</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Clients</Link></li>
                    <li><Link href={"/"} className='hover:text-white transition-all'>Billing</Link></li>
                </ul>
                <button className='inline-flex hover:bg-white hover:text-black transition-all bg-neutral-700 text-sm rounded text-neutral-200 py-1 px-3'>
                    Contact
                </button>
            </div>
        </header>
    )
}

export default Navbar
