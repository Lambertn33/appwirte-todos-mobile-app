import { Platform } from "react-native";
import { Account, Avatars, Client, Databases } from "react-native-appwrite";

// Platform identifier for Appwrite - register this in your Appwrite console
const getPlatform = () => {
  if (Platform.OS === "ios") {
    return "com.todosapp.ios";
  } else if (Platform.OS === "android") {
    return "com.todosapp.android";
  }
  return "com.todosapp.web";
};

const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform(getPlatform())
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)


const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

export { account, avatars, databases };

