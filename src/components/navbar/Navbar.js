"use client"
import { Rubik, Poppins } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
const rubik = Rubik({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300'] })

import { CiSearch, CiMenuBurger, CiBellOn, } from "react-icons/ci";
const Navbar = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false)
    return (
        <>
            {/* above medium screen only */}
            <div className={`hidden md:flex justify-between mx-10 lg:mx-32  py-4 items-center text-zinc-400 ${poppins.className}`}>
                <Link href='/'>
                    <h1 className={`${rubik.className} text-white text-3xl font-medium `}>GYMTEAM</h1>
                </Link>
                <div className='flex gap-10 lg:gap-16 xl:gap-20 text-base '>
                    <ul className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>Home</ul>
                    <ul className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>Shop</ul>
                    <ul className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>Blog</ul>
                    <ul className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>About</ul>
                </div>
                <div className='flex gap-4'>
                    <CiSearch className='cursor-pointer' />
                    <CiBellOn className='cursor-pointer' />
                    <CiMenuBurger className='cursor-pointer' />

                </div>
            </div>

            {/* below medium */}
            <div className={`relative flex md:hidden justify-between sm:mx-10 mx-4   py-4 items-center text-zinc-400 ${poppins.className}`}>
                <Link href='/'>
                    <h1 className={`${rubik.className} text-white text-xl font-medium `}>GYMTEAM</h1>
                </Link>

                <div className='flex gap-4 text-xl'>
                    <CiSearch className='cursor-pointer' />
                    <CiBellOn className='cursor-pointer' />
                    <CiMenuBurger onClick={() => setSideBarOpen(!isSideBarOpen)} className='cursor-pointer' />

                </div>

                {
                    isSideBarOpen ? <div className={`absolute z-30 top-0 -left-4 sm:-left-[39px] h-screen w-3/4 px-4 pt-20 bg-black ${isSideBarOpen ? 'animate-[slideIn_800ms_ease-out]' : 'animate-[slideOut_3s_ease-in]'}`}>
                        <div className='flex flex-col gap-10 lg:gap-16 xl:gap-20 text-base '>
                            <ul onClick={()=>{setSideBarOpen(false)}} className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300 '>Home</ul>
                            <ul onClick={()=>{setSideBarOpen(false)}} className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>Shop</ul>
                            <ul onClick={()=>{setSideBarOpen(false)}} className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>Blog</ul>
                            <ul onClick={()=>{setSideBarOpen(false)}} className='cursor-pointer border-transparent border-b-2 hover:border-red-400 transition-border duration-300'>About</ul>
                        </div>
                    </div> : null
                }
            </div></>



    )
}

export default Navbar