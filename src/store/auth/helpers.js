import { initialState } from "./initialState";

export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleLogOutPending = (state) => {
  state.user = initialState.user;
  state.userParams = initialState.userParams;
  state.token = "";
  state.isLoggedIn = false;
};

export const handleLogOutFulfilled = (state) => {
  state.user = initialState.user;
  state.userParams = initialState.userParams;
  state.token = "";
  state.isLoggedIn = false;
};

export const handleFetchCurrentUserPending = (state) => {
  state.isRefreshing = true;
};

export const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};


