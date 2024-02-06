import { ADD, COMPLETE, DELETE, EDIT } from "./actionType";

const todoState = {
  tasks: [
    { id: Math.random(), action: "learn html and css", isDone: true },
    { id: Math.random(), action: "learn state", isDone: false },
    { id: Math.random(), action: "learn hooks", isDone: false },
  ],
};

export const reducer = (state = todoState, { type, payload }) => {
  switch (type) {
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };

    default:
      return state;
  }
};
