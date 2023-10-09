import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function EcommerceLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen min-h-screen w-screen">
      <Navbar />
      <div className='flex h-full w-full flex-col overflow-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400'>
        <main className='flex-1' >
          {/* MARGIN TO ADD TO CONTAINER HEIGHT mx-6 md:mx-8 lg:mx-12 */}
          {children}
        </main>
        <Footer/>
      </div>

    </div>
  )
}
