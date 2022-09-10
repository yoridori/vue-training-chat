import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import router from "@/router";

export  function signUp(userName, email, password) {
  let result = false;
  const auth = getAuth();
   createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {

      // Signed in
      console.log("createUserWithEmailAndPassword success", userCredential)
      // TODO promiseの中でpromiseを呼びたくない
      await updateProfile(userCredential.user, {displayName: userName})
        .then( () => {
          console.log("updateProfile success", auth.currentUser)
        })
        .catch((error) => {
          console.log("updateProfile fail", error)
        });

      // TOPにリダイレクト
      await router.push('/login')
      result = true
    })
    .catch((error) => {
      console.log("createUserWithEmailAndPassword fail", error)
    });
   return result
}