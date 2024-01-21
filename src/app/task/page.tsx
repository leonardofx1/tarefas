import styles from './task.module.scss'
import { FiTrash } from "react-icons/fi";
import { FaShare } from "react-icons/fa";

const Task = () => {

    return (
      
     <main className={styles.main}>
        <section className={styles.containerCreateTask}>
            <h2 className={styles.titulo}>Qual  sua tarefa? </h2>
            <textarea className={styles.textArea} ></textarea>
            <div>
            <input type="checkbox" name="" id="" />
            <span>Deixar tarefa pública</span>
            </div>
            <button className={styles.btn}>Registrar</button>
        </section>
        <section className={styles.containerTask}>
            <h2>Minhas tarefas</h2>
            <article className={styles.bodyTask}>
                
                    <button>
                        Publica <FaShare color=' #0f2f4d'/>
                    </button>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui sed consequatur, consectetur in praesentium animi tempora dolorem eligendi omnis, harum et sequi obcaecati inventore velit. Laborum error fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae illum consectetur voluptatum esse, aspernatur hic, quam exercitationem quos expedita aliquam odit omnis a unde. Facere nemo tempora harum ratione! Omnis?recusandae.</p><span><FiTrash size={29} /></span>
                    </div>
            
            </article>
            <article className={styles.bodyTask}>
                
                <button>
                    Publica <FaShare color=' #0f2f4d'/>
                </button>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui sed consequatur, consectetur in praesentium animi tempora dolorem eligendi omnis, harum et sequi obcaecati inventore velit. Laborum error fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae illum consectetur voluptatum esse, aspernatur hic, quam exercitationem quos expedita aliquam odit omnis a unde. Facere nemo tempora harum ratione! Omnis?recusandae.</p><span><FiTrash size={29} /></span>
                </div>
        
        </article>  <article className={styles.bodyTask}>
                
                <button>
                    Publica <FaShare color=' #0f2f4d'/>
                </button>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui sed consequatur, consectetur in praesentium animi tempora dolorem eligendi omnis, harum et sequi obcaecati inventore velit. Laborum error fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae illum consectetur voluptatum esse, aspernatur hic, quam exercitationem quos expedita aliquam odit omnis a unde. Facere nemo tempora harum ratione! Omnis?recusandae.</p><span><FiTrash size={29} /></span>
                </div>
        
        </article>
        </section>
     </main>
    )
}
export default Task