import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function EcommerceLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen min-h-screen w-screen flex-col">
      <Navbar />
      <div className='flex h-full w-full flex-col overflow-y-scroll scroll-smooth scrollbar-none scrollbar-thumb-slate-400 hover:scrollbar-thin'>
        <main className=' flex-1' >
          {children}
        </main>
        <Footer/>
      </div>

    </div>
  )
}
