import { Avatar } from '@mui/material'
import Link from 'next/link'

export const SiteHeader = () => {
  return (
    <header className="pt-4 pb-4 bg-violet-900 bg-opacity-40 ">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-8">
          <Link href="/">
            <img
              src="/static/images/CommuQuebec-Texte-Blanc-768x280.png"
              className=" max-h-[50px]"
              alt="Logo CommuQuebec"
            />
          </Link>
        </div>
        <div className="col-span-4 flex self-center justify-end align-middle">
          <div className="mr-2">
            <div className="text-sm">Bienvenue,</div>
            <span className="font-semibold text-md">Doc Sandwich</span>
          </div>
          <Avatar sx={{ width: 50, height: 50 }} src="/static/images/docsandwich.png" />
        </div>
      </div>
    </header>
  )
}
