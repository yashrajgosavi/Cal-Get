import axios from "axios";
import { getASData, storeASData } from "./store.function";

const URL = "https://inspired-friendly-cougar.ngrok-free.app";

export const signUpUser = async (state, dispatch) => {
  try {
    const response = await axios.post(URL + "api/user/signup", {
      name: state.name,
      email: state.email,
      password: state.pwd,
    });
    dispatch({
      type: "SET_BODY",
      body: response.data,
    });
    console.log(response.data);
    if (response.status === 200) {
      storeASData("userResponse", response.data);
      let userResponseData = await getASData("userResponse");
      console.log("userResponseData: ");
      console.log(userResponseData);
      // handle successful signup
    }
  } catch (error) {
    console.log(error);
    // handle error
  }
};

export const signInUser = async (state, dispatch) => {
  try {
    const response = await axios.post(URL + "/api/user/signin", {
      email: state.email,
      password: state.pwd,
    });
    dispatch({
      type: "SET_BODY",
      body: response.data,
    });
    if (response.status === 200) {
      storeASData("userResponse", response.data);
      getASData("userResponse");
      // handle successful signin
    }
  } catch (error) {
    console.log(error);
    // handle error
  }
};

export const getAuth = async (state, dispatch) => {
  try {
    axios
      .post(URL + "/api/user/getAuth", {
        email: state.email,
        token: state.token,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
    // handle error
  }
};
