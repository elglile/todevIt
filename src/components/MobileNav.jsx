import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNav({ Menu }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup ملي component كيتمسح
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
    return (
        <>
            <div className="lg:hidden px-6 py-4 flex items-center justify-between">
                <button onClick={() => setOpen(!open)}>
                    {open ? (
                        <FaTimes size={26} className="text-1-600" />
                    ) : (
                        <FaBars size={26} className="text-1-600" />
                    )}
                </button>
            </div>

            <div
                className={`
                z-100
                lg:hidden 
                fixed left-0 right-0 top-[100px]  
                bg-white shadow-xl border-t border-1-200 
                transition-all duration-300
                ${open ? "opacity-100 h-screen" : "opacity-0 max-h-0 overflow-hidden"}
            `}
            >
                <div className="flex flex-col py-4 px-6 space-y-4">
                    {Menu.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={`
                                    text-lg font-semibold relative pb-2 
                                    hover:text-1-600 transition
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[3px] after:bg-1-500 after:rounded-full 
                                    after:transition-all after:duration-300
                                    ${isActive ? "after:w-10 text-1-600" : "after:w-0 hover:after:w-[20px]"}
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
