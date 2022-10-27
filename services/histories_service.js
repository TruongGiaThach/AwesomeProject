import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeHistories = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}


export const getHistories = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    // error reading value
  }
}




