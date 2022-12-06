import React from 'react'
import Image from "next/image"
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import logo from '../public/FLIX.png'

function Header() {
  return (
    <header className='flex  flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
            <HeaderItem title="Home" Icon={HomeIcon}/>
            <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
            <HeaderItem title="Collections" Icon={CollectionIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="Account" Icon={UserIcon}/>
        </div>
        <Image 
        src={logo}
        alt="Header-Icon"
        width={100}
        height={50}
        className="object-contain"
        />
    </header>
  )
}

export default Header