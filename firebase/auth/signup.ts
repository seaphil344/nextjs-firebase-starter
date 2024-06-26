import { firebase_app } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

interface SignUpResult {
  result: any | null; // You can replace `any` with the appropriate type if you know it
  error: { message: string } | null;
}

// Function to sign up a user with email and password
export default async function signUp(email: string, password: string): Promise<SignUpResult> {
  let result = null, // Variable to store the sign-up result
      error = null; // Variable to store any error that occurs

  try {
    result = await createUserWithEmailAndPassword(auth, email, password); // Create a new user with email and password
  } catch (e: any) {
    error = { message: e.message }; // Catch and store any error that occurs during sign-up
  }

  return { result, error }; // Return the sign-up result and error (if any)
}
