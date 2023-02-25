import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Parts from "./Pages/Parts";
import PrinterStatusPage from "./Pages/PrinterStatus";
import PrinterStatusDataPage from "./Pages/PrinterAdmin";

import Machining from "./Pages/Machining";
import NoPage from "./Pages/NoPage";
export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Parts />} />
                    <Route path="Printer" element={<PrinterStatusPage />} />
                    <Route path="Printer" element={<PrinterStatusDataPage />} />

                    <Route path="Machining" element={<Machining />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}