import Footer from '@/components/footer'
import Hydrations from '@/components/hidratations'
import Navbar from '@/components/navbar'

export default function EcommerceLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen min-h-screen w-screen max-w-[100%]'>
      <Hydrations />
      <Navbar />
      <main className='flex-1 pt-[4.5rem] md:pt-14'>
        {/* MARGIN TO ADD TO CONTAINER HEIGHT mx-6 md:mx-8 lg:mx-12 */}
        {children}
      </main>
      <Footer />
    </div>
  )
}
