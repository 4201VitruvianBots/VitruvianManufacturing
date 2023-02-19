import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Parts from "./Pages/Parts";
import Blogs from "./Pages/blogs";
import PrinterStatus from "./Pages/PrinterStatus";
import NoPage from "./Pages/NoPage";
export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Parts />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="PrinterStatus" element={<PrinterStatus />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}