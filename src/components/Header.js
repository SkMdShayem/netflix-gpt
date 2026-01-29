import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full p-4 flex items-center bg-gradient-to-b from-black/70 to-transparent z-10 justify-between">
      <img
        className="w-32 h-12 object-contain cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      {user && (
        <div className="justify-between flex items-center gap-4">
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
