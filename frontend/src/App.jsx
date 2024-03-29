import { Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";

import Sidebar from "./components/Sidebar/index";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Explore from "./pages/Explore/page";
import SignUp from "./pages/SignUp/page";
import Likes from "./pages/Likes/page";

import { useAuthContext } from "./Context/auth.jsx";

function App() {
  const {userAuth} = useAuthContext(); //check error
  console.log("authenticated user:", userAuth)
  return (
    <div className="flex text-white">
       <Sidebar/>
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={!userAuth ? <Login/> : <Navigate to={"/"}/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/likes' element={<Likes/>} />
          <Route path='/signup' element={!userAuth ? <SignUp/> : <Navigate to={"/"}/>} />
        </Routes>
        <Toaster/>
      </div>
    </div>
  )
}

export default App
