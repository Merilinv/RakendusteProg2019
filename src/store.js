import { createStore } from "redux";

const USER_LOADED = "USER_LOADED";
const initialState = {
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case USER_LOADED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(authReducer);

//called everytime a dispatch occurs
store.subscribe(() => console.log("store", store.getState()));

store.dispatch({
  type: USER_LOADED,
  payload: {
    email: "test@merka.com",
    _id: 10,
  }
});

store.dispatch({
  type: USER_LOADED,
  payload: {
    email: "test2@merka.com",
    _id: 20,
  }
});

export default store; 