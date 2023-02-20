import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Parts from "./Pages/Parts";
import Machining from "./Pages/Machining";
import Contact from "./Pages/contact";
import NoPage from "./Pages/NoPage";
export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Parts />} />
                    <Route path="Machining" element={<Machining />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}