import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import router from "@/router";

export async function signUp(userName, email, password) {
  let result = false;
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed in
      console.log("createUserWithEmailAndPassword success", userCredential)
      // TODO promiseの中でpromiseを呼びたくない
      updateProfile(userCredential.user, {displayName: userName})
        .then(() => {
          console.log("updateProfile success", auth.currentUser)
        })
        .catch((error) => {
          console.log("updateProfile fail", error)
        });

      localStorage.message = "新規作成に成功しました"

      // TOPにリダイレクト
      router.push('/login')
      result = true
    })
    .catch((error) => {
      console.log("createUserWithEmailAndPassword fail", error)
    });
  return result
}