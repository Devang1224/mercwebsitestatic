import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import {
  adminLoginFailure,
  adminLoginStart,
  adminLoginSuccess,
  adminLogout,
} from "./adminUserRedux";
import { publicRequest, adminUserRequest } from "../requestMethod";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} from "./allUsersRedux";
import { clearCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    return err;
  }
};

export const logout = async (dispatch) => {
  dispatch(logOut());
};

// dom->apicalls->redux

//admin

export const adminLogin = async (dispatch, user) => {
  dispatch(adminLoginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(adminLoginSuccess(res.data));
  } catch (err) {
    dispatch(adminLoginFailure());
    return err;
  }
};

export const adminSignOut = async (dispatch) => {
  dispatch(adminLogout());
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await adminUserRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await adminUserRequest.put(`/products/${id}`, product);
    const resid = res._id;
    dispatch(updateProductSuccess({ resid, product })); // id:id,product:product
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await adminUserRequest.post(`/products`, product);

    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await adminUserRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (user, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await adminUserRequest.delete(`/users/${user}`);
    dispatch(deleteUserSuccess(user));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const Clearcart = async (dispatch) => {
  dispatch(clearCart());
};
