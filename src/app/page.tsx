import Button from "@/components/Btn/button" 
import styles from './home.module.scss'
import Image from "next/image"
import home from '../../public/assets/home.png'
export default function Home() {
  return (
    <main className={styles.main} >
     <section className={styles.container}>
      <div>
        <Image src={home}  width={509} height={303} alt=''/>
      </div>
      <div><h2 className={styles.titulo}>Sistema feito para você organizar <br />seus estudos e terefas
        </h2></div>
        <div className={styles.info}>
          <span>+ 7mil posts</span>
          <span>+ 1 mil comentários</span>
        </div>
     </section>

    </main>
  )
}
