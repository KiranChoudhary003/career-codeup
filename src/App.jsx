import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Intership from "./pages/Intership";
import Career from "./pages/Career";
import Job from "./components/Job";
import siteData from "./data/siteData"
import { mountAlertManager } from "./components/Alert";
import { useEffect } from "react";
import Navbar from './components/Navbar'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Training from "./components/Training";
import courses from "./data/trainingData.js"

const App = () => {

    useEffect(() => {
        mountAlertManager();
    }, []);


    return (
        <div className="bg-gray-100 min-h-dvh">
            <Navbar data={siteData.navbar} />
            <Routes>
                <Route path="/" element={<Career />} />
                <Route path="/intership" element={<Intership />} />
                <Route path="/jobs" element={<Job />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/training/:id" element={<Training courses={courses} />} />
                <Route path="/training" element={<Training courses={courses} />} />
            </Routes>
        </div>
    );
};
export default App;
