import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password) => {
  await signInWithEmailAndPassword(getAuth(), email, password);
};
