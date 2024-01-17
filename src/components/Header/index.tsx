import Link from 'next/link'
import styles from './header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                <Link href={'/'}>
                    Tarefas <span>+</span>
                </Link>
                </div>
                <button className={styles.button}>minha conta</button>
            </nav>
        </header>
    )
}

export default Header