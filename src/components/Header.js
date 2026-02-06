import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo, clearUserInfo } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGpt } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showgpt = useSelector((store) => store.gpt.showgpt);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGpt());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUserInfo({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(clearUserInfo());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full p-4 flex items-center bg-gradient-to-b from-black/70 to-transparent z-10 justify-between">
      <img
        className="w-32 h-12 object-contain cursor-pointer"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="justify-between flex items-center gap-4">
          {showgpt && <select
            className="bg-black/50 text-white p-2 rounded"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.label}
              </option>
            ))}
          </select>}
          <button
            className="text-white bg-purple-600 p-2 font-bold rounded hover:bg-purple-700 transition"
            onClick={handleGptSearch}
          >
            {showgpt ? "Home Page" : "GPT Search"}
          </button>
          <img
            alt="usericon"
            className="w-8 h-8 rounded cursor-pointer"
            src={
              user?.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 p-2 font-bold rounded hover:bg-red-700 transition h-10"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
