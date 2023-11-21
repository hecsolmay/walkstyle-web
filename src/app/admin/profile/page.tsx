import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ChangePasswordSection from '@/components/change-password'
import UserProfileImage from '@/components/profile-image'
import UserData from '@/components/user-data'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function ProfilePage () {
  const session = await getServerSession(authOptions)

  if (session?.user === undefined) {
    redirect('/login')
  }

  const { user } = session

  return (
    <div className="my-8 flex min-h-screen flex-col gap-8 px-4 text-slate-600 md:px-10">
      <UserProfileImage />

      <UserData />

      {user.provider === 'credentials' && <ChangePasswordSection />}

    </div>
  )
}
