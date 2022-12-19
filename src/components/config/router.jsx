import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "../../pages/home";
import Discover from "../../pages/discover";
function Router() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Discover" element={<Discover />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router