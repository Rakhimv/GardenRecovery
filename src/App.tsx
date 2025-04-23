
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            offset: 120,
            easing: "ease-out-cubic",
        });
    }, []);

    

    return (
        <Routes>
            <Route index element={<Index />} />
        </Routes>
    );
}

export default App;
