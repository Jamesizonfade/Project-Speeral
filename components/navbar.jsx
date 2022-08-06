/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar () {
  return <nav className=' p-6 '>
  <span className='logo' >SPEERAL</span>
  <div className="nav-items flex">
  <a className='ml-8 text-lg'>Community</a>
  <a className='ml-8 text-lg'>Products</a>
  <a className='ml-8 text-lg'>Connect</a>
  <a className='ml-8 text-lg'>About Us</a>
  </div>

  </nav>

}

export default Navbar