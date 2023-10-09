import SignupForm from '@/components/singup-form'
import Image from 'next/image'
export default function SignupPage () {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-6">
      {/* Agrega la imagen de fondo con el componente Image */}
      <Image
        src="/fondo-vans.jpg"
        alt="login_background"
        fill
      />

      {/* Agrega el fondo blanco con un margen entre el Navbar y el Footer */}
      <div className="z-10 mt-8  flex grow flex-col items-center justify-center md:mt-0">
        {/* Contenido de la página de inicio de sesión */}
        <div className="w-full max-w-[90vw] rounded-lg bg-white p-4 sm:p-6 md:mt-16 md:w-[50vw] md:max-w-[550px] md:p-8">
          {/* Contenido del cuadro blanco */}
          <SignupForm />
        </div>
      </div>

    </div>
  )
}
