import { SearchIcon } from '@/components/icons'
import { links, type NavLinks } from '@/contants/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import MobileNavbar from '@/components/mobile-navbar'
import NavActions from '@/components/nav-actions'

export default function Navbar () {
  return (
    <>
      <nav className="hidden h-full w-full items-center justify-between bg-slate-100 px-4 py-2 shadow-md md:flex md:px-8">

        <Link href='/' className='ml-12 md:m-0'>
          <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
        </Link>

        <div className='flex items-center gap-5'>

          <ul className='hidden gap-5 md:flex'>
            {links.map((link) => (
              <NavLink key={link.label} link={link}/>
            ))}
          </ul>

          <div className='relative hidden md:block'>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
              <SearchIcon/>
            </div>
            <input type="text" className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Search...' />
          </div>

          <NavActions />
        </div>

      </nav>

      <MobileNavbar />
    </>
  )
}

function NavLink ({ link }: { link: NavLinks }) {
  const { href, label, divider } = link
  const hasDivider = divider !== undefined
  return (
    <li key={label} className={` font-medium text-black ${hasDivider ? 'border-r-2 border-gray-300 pr-4' : ''}`}>
      <Link href={href}>
        <span className='py-1 transition-all ease-in-out hover:border-b-2 hover:border-teal-500'>{label}</span>
      </Link>
    </li>
  )
}
