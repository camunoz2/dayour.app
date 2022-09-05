export default function ProfileInfo() {
  return (
    <div className="flex gap-1 items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src="https://avatars.dicebear.com/api/male/asd.svg?background=%230000ff" />
      </div>
      <div className="hidden md:block">
        <h2 className="font-bold text-xl">Cristian</h2>
        <p className="text-sm -mt-2">Tema: Hipster</p>
      </div>
    </div>
  )
}
