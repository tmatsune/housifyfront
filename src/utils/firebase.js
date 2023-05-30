import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNneWIPsqibhtFFjQO5oturwaG0UIvCXM",
  authDomain: "housify-2c32a.firebaseapp.com",
  projectId: "housify-2c32a",
  storageBucket: "housify-2c32a.appspot.com",
  messagingSenderId: "289372301001",
  appId: "1:289372301001:web:a99699524fe7f0f51ecf18"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const storage = getStorage();

export const uploadImage = async (chatName, file) => {
    const imageRef = ref(storage, `${chatName}/${file.name}`)
    try{
        const res = await uploadBytes(imageRef, file)
        console.log(res)
    }catch(error){
        console.log(error)
    }
}
export const getImage = async (chatName, file) => {
    const imageRef = ref(storage, `${chatName}/${file.name}`)
    const data = await getDownloadURL(imageRef)
    console.log(data)
    return data
}