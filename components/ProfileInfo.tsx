import { useSession, signOut} from 'next-auth/react'

export default function ProfileInfo() {
  const { data: session } = useSession()

  return (
    <div className="flex gap-1 items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        {!session ? (
          ''
        ) : (
          <img
            src={`https://avatars.dicebear.com/api/initials/${session?.user?.name}.svg?background=%230000ff`}
          />
        )}
      </div>
      <div>
        <h2 className="text-xs md:font-bold md:text-xl">{session?.user?.name}</h2>
        {!session ? (
          ''
        ) : (
          <p
            onClick={() => signOut()}
            className="text-sm underline cursor-pointer"
          >
            Log Out
          </p>
        )}
      </div>
    </div>
  )
}
