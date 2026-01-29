import { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useNavigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { clearUserInfo, setUserInfo } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(setUserInfo({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(clearUserInfo());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
