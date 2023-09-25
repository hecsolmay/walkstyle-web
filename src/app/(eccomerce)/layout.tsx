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
        <main className='mx-6 my-7 flex-1 md:mx-8 lg:mx-12' >
          {children}
        </main>
        <Footer/>
      </div>

    </div>
  )
}
