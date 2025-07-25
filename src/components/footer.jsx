import React from "react";

function Footer() {
    return (
        <footer class="bg-gray-900 pt-10 pb-10 px-10 tracking-wide">
            <div class="max-w-screen-xl mx-auto">
                <div class="grid grid-cols-2 lg:grid-cols-2 gap-4">
                    <div class="lg:flex lg:items-center flex-col">
                        <a href="javascript:void(0)" className="p-5">
                            <h1 class="text-white">CodeXintern Frontend Tasks</h1>
                        </a>
                        <p class="text-slate-400 text-sm">© ReadymadeUI. All rights reserved for header, footer and features.
                        </p>
                        <p className="text-slate-400 text-sm" ><a href="https://iconscout.com/icons/menu" class="text-underline-400 font-size-sm" target="_blank">Menu</a> by <a href="https://iconscout.com/contributors/unicons" class="text-underline font-size-sm">Unicons Font</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a></p>
                    </div>

            


                    <div>
                        <h4 class="text-base mb-4 text-white">Go to page:</h4>
                        <ul class="space-y-4">
                            <li>
                                <a href="javascript:void(0)" class="text-slate-400 hover:text-white text-sm">Translator</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="text-slate-400 hover:text-white text-sm">String Generator</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="text-slate-400 hover:text-white text-sm">Features</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="text-slate-400 hover:text-white text-sm">About</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer;