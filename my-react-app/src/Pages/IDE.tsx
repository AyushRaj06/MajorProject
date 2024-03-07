import React from "react"
import { CodingPage } from '../components/ide/CodingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from '../components/ide/Landing'

const IDE = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/coding" element={<CodingPage />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default IDE;