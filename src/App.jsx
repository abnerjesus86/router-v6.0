import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1>App</h1>
        <Outlet/>
      </div>
    </>
  )
};

export default App;
