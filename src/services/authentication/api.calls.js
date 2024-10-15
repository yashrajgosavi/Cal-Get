import axios from "axios";
import { storeASData } from "./store.function";

const URL = "http://localhost:4000";

export const signUpUser = async (state, dispatch, actions) => {
  try {
    const response = await axios.post(URL + "/api/user/signup", {
      name: state.userDetailState.name,
      email: state.userDetailState.email,
      password: state.userDetailState.pwd,
    });
    dispatch(actions.setStatus(response.data.status));
    dispatch(actions.setMessages(response.data.messages));
    if (response.data.status === "SUCCESS") {
      dispatch(actions.setData(response.data.data));
      storeASData("userResponse", response.data);
      // handle successful signup
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    // handle error
  }
};

export const signInUser = async (state, dispatch, actions) => {
  try {
    const response = await axios.post(URL + "/api/user/signin", {
      email: state.userDetailState.email,
      password: state.userDetailState.pwd,
    });
    dispatch(actions.setStatus(response.data.status));
    dispatch(actions.setMessages(response.data.messages));
    if (response.data.status === "SUCCESS") {
      dispatch(actions.setData(response.data.data));
      storeASData("userResponse", response.data);
      // handle successful signin
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    // handle error
  }
};

export const getAuth = async (data) => {
  try {
    axios
      .post(URL + "/api/user/getAuth", {
        _id: data.data._id,
        token: data.data.token,
      })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
    return false;
  } catch (error) {
    console.log(error);
    // handle error
  }
};
