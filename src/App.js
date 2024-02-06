import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Routing from "./Routing";
import { Toaster } from "react-hot-toast";
import { setAccessToken, setIsTableLoading, setLoading, setUser } from "./redux/slices/AuthSlice";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const {isTableLoading}=useSelector((state)=>state.auth)

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      
      dispatch(setLoading(true));

      const userData = JSON.parse(userDataString);
      dispatch(setUser(userData));
      dispatch(setAccessToken(userData.accessToken))
      dispatch(setLoading(false));

    }
    dispatch(setIsTableLoading(true))

  }, [dispatch, loading ]);

  if (!isTableLoading) {
    return null;
  }
 
  return (
    <>

    <Routing />
    <Toaster />
     
    </>
  );
}

export default App;
