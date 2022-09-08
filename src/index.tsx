import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {User} from "./components/user/User";
import {Labs} from "./components/labs/Labs";
import {Medical} from "./components/medical/Medical";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="labs" element={<Labs/>}/>
            <Route path="medical" element={<Medical/>}/>
        </Routes>
    </BrowserRouter>
);

