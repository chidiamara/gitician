import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Explore from "./pages/Explore/page";
import SignUp from "./pages/SignUp/page";
import Likes from "./pages/Likes/page";

function App() {

  return (
    <div className="flex text-white">
       <Sidebar/>
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/likes' element={<Likes/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
