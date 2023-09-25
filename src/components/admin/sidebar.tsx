import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { Background } from '@/components/modal-background'

interface AdminSideBarProps {
  show: boolean
}

export default function AdminSideBar ({ show }: AdminSideBarProps) {
  return (
    <aside className={cn('sticky top-0 max-h-screen md:flex md:flex-col hidden w-[20vw] lg:w-[18vw] bg-[#18243b] duration-300 z-30', !show && 'w-0 lg:w-0')}>
      <SidebarContent />
    </aside>
  )
}

interface AdminMobilePros extends AdminSideBarProps {
  closeSideBar: () => void
}

export function AdminMobileSideBar ({ show, closeSideBar }: AdminMobilePros) {
  return (
    <Background close={closeSideBar} show={show} className='md:hidden'>
      <aside className={cn('sticky left-0 max-h-screen top-0 z-30 h-screen w-[40vw] bg-[#18243b] duration-300')}>
        <SidebarContent />
      </aside>
    </Background>

  )
}

export function SidebarContent () {
  return (
    <>
      <div className='grid h-16 place-content-center border-b border-slate-500'>
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
      </div>
      <ul className='flex h-[95%] flex-col gap-1 overflow-y-scroll scroll-smooth py-5 pl-3 text-white scrollbar-none'>
        <Navlink href='#' label='Home'/>
        <Navlink isActive href='#' label='Category'/>
      </ul>
    </>
  )
}

interface NavlinkProps {
  href: string
  label?: string
  isActive?: boolean
}

export function Navlink ({ href, label, isActive = false }: NavlinkProps) {
  return (
    <li className='w-full md:w-[calc(100%_-_1rem)]'>
      <Link href={href} className={cn('block rounded mr-2 px-4 py-1 text-start text-white hover:bg-[#27354d]', isActive && ' bg-[#344661]')}>
        {label}
      </Link>
    </li>
  )
}
