import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn} from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = async() => {

  const session = await auth()
    
  return (
    <div className='px-5 py-3 bg-white-100 shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src='/logo.png' height={40} width={40} alt='' />
            </Link>

            <div className='flex items-center gap-5'>
                { session && session?.user ? (
                    <>
                        <Link href="/startup/create"> 
                            <BadgePlus className='size-6 inline-block mr-1' />
                            <span className='max-sm:hidden'>Create</span> 
                        </Link>

                        <form action={async ()=> {
                            "use server"
                            await signOut({redirectTo: "/"})
                        }}>
                            <button type="submit">
                                <LogOut className="size-6 text-red-500 inline-block mr-1" />
                                <span className="max-sm:hidden">Logout</span>
                            </button>
                        </form>

                        <Link href={`/user/${session?.id}`}>
                            <Avatar className='size-10'>
                                <AvatarImage src={session?.user?.image || ''} alt={session?.user?.image || ''}/>
                                <AvatarFallback>AV</AvatarFallback>
                            </Avatar>
                        </Link>
                    </>
                ) : (
                    <>
                        <form action={async() => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type='submit'>Login</button>
                        </form>
                    </>
                )}
            </div>
        </nav>

    </div>
  )
}

export default Navbar