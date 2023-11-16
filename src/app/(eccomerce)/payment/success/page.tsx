import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import PaymentSuccessRegister from '@/components/payment-success'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function SuccessPage () {
  const session = await getServerSession(authOptions)

  return (
    <div className='flex h-fit w-full flex-col items-center justify-center gap-6 px-5 py-24'>
      <Image
        src={'/payment-success.jpg'}
        alt='Gracias por tu compra'
        width={500}
        height={397}
      />
      <PaymentSuccessRegister userId={session?.user.userId} />
    </div>
  )
}
