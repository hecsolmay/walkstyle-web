import SignupForm from '@/components/singup-form'
import Image from 'next/image'
export default function SignupPage () {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Agrega la imagen de fondo con el componente Image */}
      <Image
        src="/fondo-vans.jpg"
        alt="login_background"
        fill
      />

      {/* Agrega el fondo blanco con un margen entre el Navbar y el Footer */}
      <div className="z-10 mx-4 my-10 flex grow flex-col items-center justify-center">
        {/* Contenido de la página de inicio de sesión */}
        <div className="w-full max-w-[500px] rounded-lg bg-white p-4 sm:p-6 md:p-8">
          {/* Contenido del cuadro blanco */}
          <SignupForm />
        </div>
      </div>

    </div>
  )
}
