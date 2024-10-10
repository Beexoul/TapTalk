import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBrppN8Mv_x1HomvmI9Alwiwo7Wz5R3fIc",
  authDomain: "taptalk-3081d.firebaseapp.com",
  projectId: "taptalk-3081d",
  storageBucket: "taptalk-3081d.appspot.com",
  messagingSenderId: "593241792435",
  appId: "1:593241792435:web:7139e59e8636c5fafc35c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//sign up method
const signup = async (username,email,password)=> {

  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
    id:user.uid,
    username:username.toLowerCase(),
    email,
    name:"",
    avatar:"",
    bio:"Hey, There I am using Taptalk",
    lastSeen:Date.now()
    });

    await setDoc(doc(db,"chat",user.uid),{
      chatData:[]
    });


    toast.success("Account Created successfully")
  
  } catch (error) {
    
    console.error(error);

    switch(error.code){
      case 'auth/email-already-in-use':
        toast.error("Email is already in use.");
        break;
      case 'auth/invalid-email':
        toast.error("Invalid email address.");
        break;
      
      case 'auth/weak-password':
        toast.error("Password should be at least 6 characters.");
        break;

      case 'auth/weak-password':
        toast.error("Password should be at least 6 characters.");
        break;

      default:
        toast.error("An error occurred. Please try again.");
      
    }
  }
}
export{signup}