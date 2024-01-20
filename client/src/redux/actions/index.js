import axios from "axios";
import {
  ADDNEWTODO,
  GETALLTODO,
  TOGGLETODO,
  UPDATETODO,
  DELETETODO,
  TOGGLETAB,
} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEWTODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALLTODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLETODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling TOGGLETODO API", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: UPDATETODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling UPDATETODO API", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETETODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling DELETETODO API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLETAB, selected: tab });
};
