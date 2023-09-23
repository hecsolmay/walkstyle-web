import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function EcommerceLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className='mx-6 my-7 flex-1 md:mx-8 lg:mx-12' >{children}</main>
      <Footer/>
    </div>
  )
}
