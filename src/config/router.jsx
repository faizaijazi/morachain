import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "../pages/home";
import Discover from "../pages/discover";
import Login from "../pages/login";
import Signup from "../pages/signup";
function Router() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Discover" element={<Discover />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router