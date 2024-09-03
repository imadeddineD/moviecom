"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "../public/t44.jpeg"
import Image from 'next/image'
import userIcon from "../public/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'
const Header = () => {

    const [searchInput,setSearchInput] = useState("")
    const router = useRouter()

    useEffect(()=>{
        if(searchInput){
            router.push(`/search?q=${searchInput}`);
        }
    },[searchInput])

    const handleSubmit = (e : any)=>{
        e.preventDefault()
    }
  return (
    <header className='fixed top-0 w-full h-16 bg-[#0d1323] z-40 opacity-80'>
        <div className=" container mx-auto px-3 sm:px-0 flex items-center h-full">
                <Link href="/">
                    <Image
                        src={logo}
                        alt='logo'
                        width={60} 
                        height={60}
                    />
                </Link>
            

                <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2' 
                // onSubmit={handleSubmit}
                >
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                                <IoSearchOutline/>
                        </button>
                    </form>
            <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                <Image
                    src={userIcon}
                    alt='auto'
                    width={100}
                    height={100} 
                />
            </div>
        </div>
        </div>

        
    </header>
  )
}

export default Header