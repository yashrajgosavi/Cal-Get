import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeASData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data stored successfully under key ${key}`);
  } catch (error) {
    console.error(`Error storing data under key ${key}: `, error);
  }
};

export const getASData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Error reading data from key ${key}: `, error);
  }
};

export const removeASData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data removed successfully from key ${key}`);
  } catch (error) {
    console.error(`Error removing data from key ${key}: `, error);
  }
};

export const clearAllASData = async () => {
  try {
    await AsyncStorage.clear();
    console.log("All data cleared successfully");
  } catch (error) {
    console.error("Error clearing all data: ", error);
  }
};
