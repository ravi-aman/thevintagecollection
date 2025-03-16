import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DashboardNavbar = () => {
    const [activeAccount, setActiveAccount] = useState<string>("Personal");
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 shadow-md bg-white">
            <div className="flex items-center space-x-4">
                <div className="flex items-center pr-36">
                    <img src="/logo.png" alt="Neecop Logo" className="h-8" />
                </div>
                <div className="relative flex items-center rounded-md px-3 py-1">
                    <img src="/dashboard/search.png" alt="Search" className="h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 bg-none outline-none border-none text-gray-700"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <img src="/dashboard/message.png" alt="Messages" className="h-6 w-6 cursor-pointer" />
                <div className="relative cursor-pointer">
                    <img src="/dashboard/bell.png" alt="Notifications" className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        5
                    </span>
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 p-2"
                    >
                        <img src="/dashboard/avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full border" />
                        <span className="font-medium flex gap-2 items-center">
                            {activeAccount}
                            <img
                                src="/public/dashboard/downArrow.png"
                                className="w-5 h-5 transition-transform duration-200"
                                style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                alt=""
                            />
                        </span>
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute right-0 mt-4 w-48 p-1 bg-white border rounded-lg shadow-lg"
                            >
                                <button
                                    onClick={() => {
                                        setActiveAccount("Personal");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-[10px]"
                                >
                                    Personal Account
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveAccount("Business");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-[10px]"
                                >
                                    Business Account
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
