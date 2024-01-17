'use client'
import { signIn } from "next-auth/react";



const Button = ()=> {
    return(
        <div>
        <button onClick={() => signIn('google')}>ola login</button>
        </div>)
}

export default Button