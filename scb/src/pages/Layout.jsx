import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Layout = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className='d-flex'>
            <Sidebar isOpen={isOpen} />
            <div
                className={`flex-1 w-100 content `}
                style={{
                    transition: 'margin-left 0.3s ease-in-out',
                    position: 'relative',
                    zIndex: '1',
                }}
            >
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="toggle-button btn" onClick={handleToggle}>
                            <i className="fs-5 bi bi-filter-circle-fill"></i>
                        </button>
                    </div>
                </nav>
                <div className='container mt-3'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
    )
}

export default Layout;