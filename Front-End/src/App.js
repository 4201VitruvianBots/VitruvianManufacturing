import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Parts from "./Pages/Parts";
import PrinterStatusPage from "./Pages/PrinterStatus";
import Machining from "./Pages/Machining";
import NoPage from "./Pages/NoPage";
import NewPartApp from "./NewPartApp"
export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Parts />} />
                    <Route path="Printer" element={<PrinterStatusPage />} />
                    <Route path="Machining" element={<Machining />} />
                    <Route path="HomePt2" element={<NewPartApp />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}