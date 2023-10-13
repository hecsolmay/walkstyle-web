import Image from 'next/image'
import LoginForm from '@/components/login-form'
export default function LoginPage () {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-3 md:py-6">
      {/* Agrega la imagen de fondo con el componente Image */}
      <Image
        src="/fondo-travis.jpg"
        alt="login_background"
        fill
      />

      {/* Agrega el fondo blanco con un margen entre el Navbar y el Footer */}
      <div className="z-10 flex grow flex-col items-center justify-center">
        {/* Contenido de la página de inicio de sesión */}
        <div className="w-full max-w-[90vw] rounded-lg  bg-white  p-4 sm:p-6 md:w-[35vw] md:p-8">
          {/* Contenido del cuadro blanco */}
          <LoginForm />
        </div>
      </div>

    </div>
  )
}
