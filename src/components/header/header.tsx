import React from "react";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    );
};

export default Header;
