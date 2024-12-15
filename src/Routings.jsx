import { Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import Home from "./Home.jsx";
import Checkout from "./Checkout.jsx";
const Routings = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </div>
    );
}
export default Routings;