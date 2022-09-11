import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {User} from "./components/user/User";
import {Labs} from "./components/labs/Labs";
import {Medical} from "./components/medical/Medical";
import {Login} from "./components/login/Login";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="user" element={<User/>}/>
            <Route path="labs" element={<Labs/>}/>
            <Route path="medical" element={<Medical/>}/>
        </Routes>
    </BrowserRouter>
);

