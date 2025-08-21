
import InfoMealMobile from './services/InfoMealMobile';
import { BrowserRouter as  Router , Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import "./index.css"
import {JSX} from "react";
export default function App(): JSX.Element {
    return (
        <Router>

            <nav className="p-4 bg-orange-500 text-white flex gap-4">
                <Link to="/">Home</Link>

                <Link to="/contact">Contact</Link>
                <Link to="/meal">Meal</Link>

            </nav>

            {/* Page Routes */}
            <div className="p-4">
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/meal" element={<InfoMealMobile/>}/>
                </Routes>
            </div>
        </Router>
    );
}
