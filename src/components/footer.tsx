import Image from 'next/image'

export default function Footer () {
  return (
    <footer className="flex w-screen flex-col  gap-5 bg-black p-8">
      <div className="flex items-center gap-6">
        <Image src={'/icon.webp'} width={55} height={55} alt='WalkStyle Logo' />
        <h1 className="text-2xl font-bold uppercase text-white" >WALKSTYLE</h1>
      </div>
      <span className="border-t border-gray-400"></span>
      <p className='text-slate-500'>© 2023 WalkStyle. All Rights Reserved.</p>
    </footer>
  )
}
