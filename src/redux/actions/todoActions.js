
// Action constants.
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "TOggle Todo";

//Action Creators
export const addToDo = (text) => ({type:ADD_TODO,text});
export const toggleToDo = (index) => ({type:TOGGLE_TODO,index});

