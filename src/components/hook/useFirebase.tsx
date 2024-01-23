import { db } from "@/services/firebase.Connection";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useState } from "react";
interface ITask {
  user: {
    name: string;
    email: string;
  };
  created: Date;
  task: string;
  publicTask: boolean;
}
const useFirebase = () => {
  const [task, setTask] = useState("");
  const [publicTask, setPublicTask] = useState<boolean>(false);

  const fetchData = ({ user }:Pick<ITask,  'user'>) => {
    const q = query(collection(db, "cities"), where("user", "==", user?.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const task = [];
      querySnapshot.forEach((doc) => {
        task.push(doc.data());
      });
    });
  };

  const addDocTask = async ({user, task, publicTask}: ITask) => {
    const newTask: ITask = {
      user: user,
      created: new Date(),
      task: task,
      publicTask:publicTask,
    };
    const add = await addDoc(collection(db, "task"), newTask);
  };

  return { fetchData, addDocTask, task, setTask, publicTask, setPublicTask };
};
export default useFirebase;
