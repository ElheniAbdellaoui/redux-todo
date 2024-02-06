import { ADD, COMPLETE, DELETE, EDIT } from "./actionType";

export const deleteTask = (TaskID) => {
  return {
    type: DELETE,
    payload: TaskID,
  };
};

export const comp = (TaskID) => {
  return {
    type: COMPLETE,
    payload: TaskID,
  };
};

export const add = (newtexte) => {
  return {
    type: ADD,
    payload: newtexte,
  };
};
export const edit = (newedit) => {
  return {
    type: EDIT,
    payload: newedit,
  };
};
