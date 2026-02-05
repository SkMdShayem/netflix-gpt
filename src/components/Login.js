import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();

  const toggleSign = () => {
    setIsSignUp(!isSignUp);
  };

  const handleButton = () => {
    const validation = checkValidation(
      Name.current?.value || "",
      email.current?.value || "",
      password.current?.value || "",
      confirmPassword.current?.value || "",
      isSignUp,
    );
    setValidationMessage(validation.message);

    if (!validation.isValid) return;

    // Proceed with sign-in or sign-up logic
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                setUserInfo({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setValidationMessage("Profile update failed.");
              console.error("Error updating profile:", error);
            });
          setValidationMessage("Sign up successful!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing up:", errorCode, errorMessage);
          setValidationMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setValidationMessage("Sign in successful!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          setValidationMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-screen object-cover "
          src={BACKGROUND_IMAGE}
          alt="Netflix Background"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex flex-col space-y-4 w-80 bg-black p-6 rounded-md bg-black/75"
        >
          <h1 className="relative font-bold text-4xl mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              ref={Name}
              type="text"
              placeholder="Full Name"
              className="p-2 rounded bg-gray-800 border border-gray-700"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          {isSignUp && (
            <input
              ref={confirmPassword}
              type="confirmPassword"
              placeholder="Confirm Password"
              className="p-2 rounded bg-gray-800 border border-gray-700"
            />
          )}
          <p>{validationMessage}</p>
          <button
            type="submit"
            className="bg-red-600 p-2 rounded hover:bg-red-700 transition"
            onClick={handleButton}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="text-gray-400 text-sm mt-2 hover:cursor-pointer"
            onClick={toggleSign}
          >
            {isSignUp
              ? "Already have an account? Sign in now."
              : "Don't have an account? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
