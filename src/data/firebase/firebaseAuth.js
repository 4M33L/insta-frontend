import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

const auth = getAuth();

export const signInUser = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user
    localStorage.setItem("token", user.accessToken)
    return {user}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const registerUser = async (username, email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user
    await updateProfile(auth.currentUser, {
      displayName: username,
    })
    localStorage.setItem("token", user.accessToken)
    return {user}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const signOutUser = async () => {
  await signOutUser(auth)
  localStorage.removeItem("token")
}