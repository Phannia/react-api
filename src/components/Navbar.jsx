import React from "react";

const Navbar = ( {title} ) => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                <span className="navbar-brand mb-0 h1">{title}</span>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
