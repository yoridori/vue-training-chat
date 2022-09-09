import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export  function signUp(userName, email, password) {
  const auth = getAuth();
   createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {

      // Signed in
      console.log("createUserWithEmailAndPassword success", userCredential)
      await updateProfile(userCredential.user, {displayName: userName})
        .then( () => {
          console.log("updateProfile success", auth.currentUser)
        })
        .catch((error) => {
          console.log("updateProfile fail", error)
        });
    })
    .catch((error) => {
      console.log("createUserWithEmailAndPassword fail", error)
    });
}