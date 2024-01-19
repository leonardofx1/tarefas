import styles from './task.module.scss'


const Task = () => {

    return (
      
     <main className={styles.main}>
        <section className={styles.containerCreateTask}>
            <h2 className={styles.titulo}>Qual  sua tarefa? </h2>
            <textarea className={styles.textArea} name="" id="" cols="30" rows="10"></textarea>
            <div>
            <input type="checkbox" name="" id="" />
            <span>Deixar tarefa pública</span>
            </div>
            <button className={styles.btn}>Registrar</button>
        </section>
        <section className={styles.containerTask}>
            <h2>Minhas tarefas</h2>

        </section>
     </main>
    )
}
export default Task