"use client"

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () =>{
    return (
        <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={() => signIn()}>
            Login
        </button>
    )
};

export const LogoutButton = () =>{
    return (
        <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={()=>signOut()} >
            Logout
        </button>
    )
}