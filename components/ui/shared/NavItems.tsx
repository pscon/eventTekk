'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

  const pathName = usePathname()
  return (
    <ul className='flex md:flex-between flex-col w-full  gap-5 md:flex-row items-start'>

      {
        headerLinks.map((link) => {
          const isActive = pathName === link.route
          return (

            <li key={link.route} className={` ${isActive && 'text-purple-500 '} flex-center p-medium-16 whitespace-nowrap `}>
              <Link href={link.route}  >
                {link.label}
              </Link>    </li>
          )
        })
      }
    </ul>
  )
}

export default NavItems