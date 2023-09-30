import MobileNavbar from '@/components/mobile-navbar'
import NavActions from '@/components/nav-actions'
import SearchBarInput from '@/components/search-navbar'
import { links, type NavLinks } from '@/contants/navlinks'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <>
      <nav className="sticky top-0 z-50 hidden h-16 w-full items-center justify-between bg-slate-100 px-4 py-2 shadow-md md:flex md:px-8">

        <Link href='/' className='ml-12 md:m-0'>
          <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
        </Link>

        <div className='flex items-center gap-5'>

          <ul className='hidden gap-5 md:flex'>
            {links.map((link) => (
              <NavLink key={link.label} link={link}/>
            ))}
          </ul>

          <SearchBarInput />

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
