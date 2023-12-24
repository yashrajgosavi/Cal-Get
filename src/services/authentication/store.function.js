import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeASData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getASData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeASData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed successfully.");
  } catch (error) {
    console.error("Error removing data: ", error);
  }
};

export const clearAllASData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
    console.log("All data removed successfully.");
  } catch (error) {
    console.error("Error clearing all data: ", error);
  }
};
