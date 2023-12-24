import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const signUpUser = async (state, dispatch) => {
  try {
    let signUpSuccess = false;
    const response = await axios.post(
      "https://inspired-friendly-cougar.ngrok-free.app/api/user/signup",
      {
        name: state.name,
        email: state.email,
        password: state.pwd,
      }
    );
    dispatch({
      type: "SET_BODY",
      body: response.data,
    });
    console.log(response.data);
    if (response.status === 200) {
      signUpSuccess = true;
      // Store the response data in AsyncStorage
      await AsyncStorage.setItem("signUpResponse", JSON.stringify(state.body));
      // handle successful signup
    }
    return signUpSuccess;
  } catch (error) {
    console.log(error);
    // handle error
  }
};

export const signInUser = async (state, dispatch) => {
  try {
    let signInSuccess = false;
    const response = await axios.post(
      "https://inspired-friendly-cougar.ngrok-free.app/api/user/signin",
      {
        email: state.email,
        password: state.pwd,
      }
    );
    dispatch({
      type: "SET_BODY",
      body: response.data,
    });
    console.log(response.data);
    if (response.status === 200) {
      signInSuccess = true;
      // Store the response data in AsyncStorage
      await AsyncStorage.setItem("signInResponse", JSON.stringify(state.body));
      // handle successful signin
    }
    return signInSuccess;
  } catch (error) {
    console.log(error);
    // handle error
  }
};
