/* eslint-disable default-case */
import React from "react"
import Navbar from "./Navbar/Navbar";
import Expenses from "../pages/Expenses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import "./styles.css"
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from "../pages/Currency";
import Registration from "../pages/Registration";



function App() {



    return <div>
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="expenses" element={<Expenses />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="currency" element={<Currency />}></Route>
                    <Route path="registration" element={<Registration />}></Route>
                </Routes>

            </div>
        </>
    </div>



}
export default App;
