/* eslint-disable default-case */
import React from "react"
import Navbar from "./Navbar";
import Expenses from "../pages/Expenses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import "./styles.css"
import {Route, Routes} from "react-router-dom"



function App() {
    


    return <div>
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="expenses" element={<Expenses />}></Route>
                    <Route path="login" element={<Login />}></Route>
                </Routes>

            </div>
        </>
    </div>



}
export default App;
