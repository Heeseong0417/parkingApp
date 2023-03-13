import AsyncStorage from "@react-native-async-storage/async-storage";
const key = 'data';
const StorageSave = {
    async get() {
      try {
        const rawData = await AsyncStorage.getItem(key);
        if (!rawData) {
          throw new Error('No saved ' + key);
        }
    
        const savedData = JSON.parse(rawData);
        return savedData;
      } catch (e) {
        throw new Error('Failed to load ' + key);
      }
    },
    async set(data: any) {
      try {
        console.log("json data :",JSON.stringify(data))
        await AsyncStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        throw new Error('Failed to save ' + key);
      }
    },
  };
  
  export default StorageSave;