// import { useState } from 'react';
// @ts-ignore
//import InfoMeal from './services/InfoMeal.tsx'
import InfoMealMobile from "./services/InfoMealMobile.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css"

export default function App(): JSX.Element {
    return (
        <Router>
            {/* Navigation */}
            <nav className="p-4 bg-orange-500 text-white flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Page Routes */}
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}
