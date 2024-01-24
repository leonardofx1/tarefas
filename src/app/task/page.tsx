"use client";

import styles from "./task.module.scss";
import { FiTrash } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import useFirebase from "@/components/hook/useFirebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ITask } from '../../components/hook/useFirebase';
import { useEffect } from "react";

interface IUser {
  name:string
  email:string
}
const Task = () => {
  const { addDocTask, task, setTask, snapshot,publicTask, setPublicTask, fetchData} =
    useFirebase();
  const { data: session, status } = useSession();

  useEffect(()=> {
    if(session?.user) {
      const user = session.user as IUser
      fetchData(user)
    }
  } ,[session?.user?.email])

  useEffect(()=> {
    console.log(snapshot, 'napeffect')
  } ,[snapshot])
  const router = useRouter()

  const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(session?.user?.name && session?.user?.email){
    const user:IUser = {
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
           {snapshot?.map((task)=> ( <article className={styles.bodyTask}>
             { task.publicTask &&( <button>
                Publica <FaShare color=" #0f2f4d" />
              </button>)}
              <div>
                <p>
                 {task.task}
                </p>
                <span>
                  <FiTrash size={29} />
                </span>
              </div>
            </article>))}
          </section>
        </main>
      )}
      {status === "unauthenticated" && router.push('/')}
    </>
  );
};
export default Task;
