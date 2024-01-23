"use client";

import styles from "./task.module.scss";
import { FiTrash } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import useFirebase from "@/components/hook/useFirebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Task = () => {
  const { addDocTask, task, setTask, publicTask, setPublicTask } =
    useFirebase();
  const { data: session, status } = useSession();

 

  const router = useRouter()

  const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(session?.user?.name){
    const user = {
        name:session?.user?.name,
        email:session?.user?.email}
    addDocTask({ task, publicTask, user });}
  };

  return (
    <>
      {status === "loading" && <p>ola carregando</p>}
      {status === "authenticated" && (
        <main className={styles.main}>
          <form
            onSubmit={handleSubmitTask}
            className={styles.containerCreateTask}
          >
            <h2 className={styles.titulo}>Qual sua tarefa? </h2>
            <textarea
              value={task}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setTask(e.target.value)
              }
              className={styles.textArea}
            ></textarea>
            <div>
              <input
                onChange={() => setPublicTask((t) => !t)}
                type="checkbox"
                name=""
                id=""
              />
              <span>Deixar tarefa pública</span>
            </div>
            <button type="submit" className={styles.btn}>
              Registrar
            </button>
          </form>
          <section className={styles.containerTask}>
            <h2>Minhas tarefas</h2>
            <article className={styles.bodyTask}>
              <button>
                Publica <FaShare color=" #0f2f4d" />
              </button>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque qui sed consequatur, consectetur in praesentium
                  animi tempora dolorem eligendi omnis, harum et sequi obcaecati
                  inventore velit. Laborum error fugiat Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Molestiae illum
                  consectetur voluptatum esse, aspernatur hic, quam
                  exercitationem quos expedita aliquam odit omnis a unde. Facere
                  nemo tempora harum ratione! Omnis?recusandae.
                </p>
                <span>
                  <FiTrash size={29} />
                </span>
              </div>
            </article>
          </section>
        </main>
      )}
      {status === "unauthenticated" && router.push('/')}
    </>
  );
};
export default Task;
