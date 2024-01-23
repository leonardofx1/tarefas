'use client'
import Link from 'next/link'
import styles from './header.module.scss'

import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
    const {data:session} = useSession()
    console.log(session)
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                <Link className={styles.home}href='/'>
                    Tarefas <span>+</span>
                </Link>
               {!!session && ( <Link className={styles.task} href='/task'>meu painel</Link>)}
                </div>
                {!!session ? (<button onClick={()=> signOut()}className={styles.button}>Ola, {session?.user?.name}</button>):(<button onClick={()=> signIn('google')}className={styles.button}>Acessar</button>)}
            </nav>
        </header>
    )
}

export default Header