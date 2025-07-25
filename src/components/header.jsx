import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                {/* Logo */}
                <a href="javascript:void(0)" className="max-sm:hidden">
                    <h1 className="text-xl font-semibold text-black">CodeXintern Frontend Tasks</h1>
                </a>

                {/* Hamburger button */}
                {!menuOpen && (
                    <button
                        className="lg:hidden block rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-300 cursor-pointer z-[101]"
                        onClick={() => setMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu">
                            <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"></path>
                        </svg>
                    </button>
                )}

                {/* Background overlay */}
                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    ></div>
                )}

                {/* Menu */}
                <div
                    className={`${menuOpen
                        ? "fixed bg-white w-3/4 max-w-xs top-0 left-0 p-6 h-full shadow-md overflow-auto z-50"
                        : "hidden"
                        } lg:flex gap-x-4`}
                >
                    {/* Close button */}
                    <button
                        className="lg:hidden absolute top-2 right-2 rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-300 cursor-pointer z-50"
                        onClick={() => setMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul className="lg:flex gap-x-4 max-lg:space-y-3 w-full">
                        <li className="mb-6 hidden max-lg:block">
                            <h1 className="text-black text-lg font-semibold">CodeXintern Frontend Tasks</h1>
                        </li>
                        {[
                            { to: "/", label: "Translator" },
                            { to: "/textgen", label: "String Generator" },
                            { to: "/feature", label: "Feature" },
                            { to: "/about", label: "About" },
                        ].map(({ to, label }, index) => (
                            <li
                                key={index}
                                className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                            >
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `block font-medium text-[15px] ${isActive ? "text-blue-700" : "text-slate-900"
                                        } hover:text-blue-700`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;