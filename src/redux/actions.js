import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK, SET_TASKS } from './types';
import { firestore } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

export const addTask = (task) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(firestore, 'tasks'), task);
    dispatch({ type: ADD_TASK, payload: { ...task, id: docRef.id } });
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};

export const editTask = (id, updates) => async (dispatch) => {
  try {
    const taskDoc = doc(firestore, 'tasks', id);
    await updateDoc(taskDoc, updates);
    dispatch({ type: EDIT_TASK, payload: { id, updates } });
  } catch (error) {
    console.error("Error editing task: ", error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const taskDoc = doc(firestore, 'tasks', id);
    await deleteDoc(taskDoc);
    dispatch({ type: DELETE_TASK, payload: id });
  } catch (error) {
    console.error("Error deleting task: ", error);
  }
};

export const completeTask = (id) => async (dispatch) => {
  try {
    const taskDoc = doc(firestore, 'tasks', id);
    await updateDoc(taskDoc, { completed: true });
    dispatch({ type: COMPLETE_TASK, payload: id });
  } catch (error) {
    console.error("Error completing task: ", error);
  }
};

export const setTasks = (tasks) => {
  return { type: SET_TASKS, payload: tasks };
};

export const fetchTasks = () => (dispatch) => {
  const tasksCollection = collection(firestore, 'tasks');
  onSnapshot(tasksCollection, (snapshot) => {
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch(setTasks(tasks));
  });
};
