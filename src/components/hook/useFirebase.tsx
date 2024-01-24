import { db } from "@/services/firebase.Connection";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useState } from "react";
export interface ITask {
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
  const [snapshot, setSnapshot] = useState<ITask[]>([])

  const fetchData = ({ email}:{email:string}) => {
  
    const q = query(collection(db, "task"), where("user.email", "==", email));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setSnapshot((state) => [...state, doc.data() as ITask])
      });
     
    })
  };


  const addDocTask = async ({user, task, publicTask}: Omit<ITask, "created">) => {
    const newTask: ITask = {
      user: user,
      created: new Date(),
      task: task,
      publicTask:publicTask,
    };
    const add = await addDoc(collection(db, "task"), newTask);
  };

  return { fetchData, addDocTask,snapshot, task, setTask, publicTask, setPublicTask };
};
export default useFirebase;
