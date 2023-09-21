import { type NavLinks, links } from '@/contants/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@/components/icons'

export default function Navbar () {
  return (
    <nav className="flex h-full w-full items-center justify-between bg-slate-100 px-4 py-2 shadow-md md:px-8">
      <Link href='/'>
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo'></Image>
      </Link>

      <div className='flex items-center gap-3'>

        {/* DESKTOP NAVLINKS */}

        <ul className='hidden gap-5 md:flex'>
          {links.map((link) => (
            <NavLink key={link.label} link={link}/>
          ))}
        </ul>

        {/* ACTIONS  */}

        <div className='flex items-center gap-2 md:gap-5'>

          {/* SEARCH INPUT */}

          <div className='relative'>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
              <SearchIcon/>
            </div>
            <input type="text" className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Search...' />
          </div>

          {/* USER PROFILE */}

          <div className='cursor-pointer text-slate-600'>
            <UserIcon />
          </div>

          {/* CART */}

          <div className='cursor-pointer text-slate-600'>
            <ShoppingCartIcon />
          </div>

        </div>
      </div>

    </nav>

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
