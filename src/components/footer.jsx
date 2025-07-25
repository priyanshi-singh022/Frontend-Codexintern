import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 pt-10 pb-10 px-10 tracking-wide">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="lg:flex lg:items-center flex-col">
                        <a href="javascript:void(0)" className="p-5">
                            <h1 className="text-white">CodeXintern Frontend Tasks</h1>
                        </a>
                        <p className="text-slate-400 text-sm">© ReadymadeUI. All rights reserved for header, footer and features.
                        </p>
                        <p className="text-slate-400 text-sm" ><a href="https://iconscout.com/icons/menu" className="text-underline-400 font-size-sm" target="_blank">Menu</a> by <a href="https://iconscout.com/contributors/unicons" className="text-underline font-size-sm">Unicons Font</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a></p>
                    </div>

                    <div>
                        <h4 className="text-base mb-4 text-white">Go to page:</h4>
                        <ul className="space-y-4">
                            <li>
                                <NavLink to={"/"} href="javascript:void(0)" className="text-slate-200 hover:text-white text-sm">Translator</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/textgen"} href="javascript:void(0)" className="text-slate-200 hover:text-white text-sm">String Generator</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/feature"} href="javascript:void(0)" className="text-slate-200 hover:text-white text-sm">Features</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"} href="javascript:void(0)" className="text-slate-200 hover:text-white text-sm">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;