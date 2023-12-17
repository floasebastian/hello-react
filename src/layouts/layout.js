import React from "react";
import { Outlet } from "react-router-dom";
export const Layout = (props) => {
    return (
        <div>
            <div><Outlet/></div>
        </div>
    );
};