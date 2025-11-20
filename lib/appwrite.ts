import { Account, Avatars, Client, Databases } from "react-native-appwrite";

const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)


const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

export { account, avatars, databases };

