'use client'
import { signOut } from "next-auth/react";
import Image from "next/image"

export type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function UserCard({ user, pagetype }: Props) {

    //console.log(user)

    const signout = ()=>{
        signOut({callbackUrl:'http://localhost:3000/dashboard', redirect:true});
    }

    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.name}!
        </div>
    ) : null

    // const emailDisplay = user?.email ? (
    //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
    //         {user?.email}
    //     </div>
    // ) : null

    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            {/* {emailDisplay} */}
            {userImage}
            <p className="text-2xl text-center">{pagetype} Page!</p>
            <button onClick={signout} className="py-1 px-4 bg-black text-white rounded-lg w-[250px] h-[50px] mx-auto block" >Sigout</button>
        </section>
    )
}