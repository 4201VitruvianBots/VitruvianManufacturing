import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Parts from "./Pages/Parts";
import PrinterStatusPage from "./Pages/PrinterStatus";
import PrinterStatusDataPage from "./Pages/PrinterAdmin";
import Machining from "./Pages/Machining";
import NoPage from "./Pages/NoPage";
import NewPartApp from "./Pages/pt2home";
import NewPartApp3 from "./Pages/pt2homecopy";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Parts />} />
                    <Route path="Printer" element={<PrinterStatusPage />} />
                    <Route path="PrinterStatusDataPage" element={<PrinterStatusDataPage />} />
                    <Route path="Machining" element={<Machining />} />
                    <Route path="HomePt2" element={<NewPartApp />} />
                    <Route path="HomePt3" element={<NewPartApp3 />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}