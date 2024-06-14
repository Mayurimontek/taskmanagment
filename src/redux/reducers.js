import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK, SET_TASKS } from './types';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, ...action.payload.updates } : task)
      };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: true } : task)
      };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
