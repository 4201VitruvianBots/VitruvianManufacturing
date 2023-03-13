// import ".../CSS/ApPP.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Parts from "./Parts";
import PrinterStatusPage from "./PrinterStatus";
import PrinterStatusDataPage from "./PrinterAdmin";

import Machining from "../Routes/Machining";
import NoPage from "../PagesInAppCode/NoPage";
import NewPartApp from "./pt2home";
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
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}