import SignupForm from '@/components/singup-form'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
export default async function SignupPage () {
  const session = await getServerSession()

  if (session?.user !== undefined) {
    redirect('/')
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-6 pt-8">
      {/* Agrega la imagen de fondo con el componente Image */}
      <Image
        src="/fondo-vans.jpg"
        alt="login_background"
        fill
      />

      {/* Agrega el fondo blanco con un margen entre el Navbar y el Footer */}
      <div className="z-10 mb-8 flex grow flex-col items-center justify-center">
        {/* Contenido de la página de inicio de sesión */}
        <div className="w-full max-w-[90vw] rounded-lg bg-white p-4 sm:p-6 md:w-[50vw] md:max-w-[550px] md:p-8">
          {/* Contenido del cuadro blanco */}
          <SignupForm />
        </div>
      </div>

    </div>
  )
}
