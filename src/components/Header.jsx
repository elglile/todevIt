import React from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from '../Data'
import Topbar from './Topbar'
import { MdLanguage } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import SearchBar from './SearchBar'
import LanguageSwitcher from './LanguageSwitcher'
import MobileNav from './MobileNav'

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Topbar />
      <header
        className='
          flex items-center justify-between px-2 py-5
          lg:flex lg:items-center  lg:justify-center'
      >
        <div className=' flex  items-center'>
        <MobileNav Menu={Menu} />
        <Link to={"/"}>
                <img src={assets.logo1} className='w-20  p-0  ' alt="" />
        </Link>
        </div>
        
        <nav className="hidden lg:flex items-center justify-between  col-span-4  px-20 text-[16px] font-bold space-x-6">
          {Menu.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[#333] no-underline 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[3px] after:bg-1-500 after:rounded-full hover:text-1-500
              after:transition-all after:duration-300 p-2
              ${isActive ? 'after:w-10' : 'after:w-0 hover:after:w-full'}
            `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className='flex items-center justify-center '>
          <SearchBar />
          <LanguageSwitcher />
        </div>
      </header>
    </>
  )
}

export default Header
