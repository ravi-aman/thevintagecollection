"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use Next.js pathname to check active route
import { useRouter } from "next/navigation"; // For navigation
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
    { name: "Dashboard", icon: "/dashboard/dashboard.png", href: "/dashboard" },
    { name: "Funds", icon: "/dashboard/funds.png", href: "/dashboard/funds" },
    { name: "Startups", icon: "/dashboard/startup.png", href: "/dashboard/startups" },
    { name: "MSME's", icon: "/dashboard/msme.png", href: "/dashboard/msme" },
    { name: "Government Policy", icon: "/dashboard/policy.png", href: "/dashboard/policy" },
    { name: "Reports", icon: "/dashboard/reports.png", href: "/dashboard/reports" },
    { name: "Connections", icon: "/dashboard/connection.png", href: "/dashboard/connections" },
    { name: "Inbox", icon: "/dashboard/inbox.png", href: "/dashboard/inbox", badge: 16 },
];

const otherInfo = [
    { name: "Knowledge Base", icon: "/dashboard/knowledge.png", href: "/dashboard/knowledge" },
    { name: "Funding Updates", icon: "/dashboard/update.png", href: "/dashboard/updates" },
];

const settings = [
    { name: "Personal Settings", icon: "/dashboard/personal.png", href: "/settings/personal" },
    { name: "Global Settings", icon: "/dashboard/setting.png", href: "/settings/global" },
];

const Sidebar = () => {
    const pathname = usePathname(); // Get the current path
    const router = useRouter(); // Next.js navigation

    return (
        <aside className="position-fixed top-0 start-0 w-20 vh-100 bg-white shadow p-3 overflow-auto">
            <nav>
                {menuItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className={`d-flex align-items-center p-2 mb-2 rounded ${
                                pathname === item.href ? "bg-primary text-white" : "text-dark bg-light"
                            }`}
                        >
                            <img src={item.icon} alt={item.name} className="me-2" width="24" height="24" />
                            <span>{item.name}</span>
                            {item.badge && (
                                <span className="ms-auto badge bg-danger">{item.badge}</span>
                            )}
                        </motion.div>
                    </Link>
                ))}

                <h6 className="text-secondary mt-4">Other Information</h6>
                {otherInfo.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className={`d-flex align-items-center p-2 mb-2 rounded ${
                                pathname === item.href ? "bg-primary text-white" : "text-dark bg-light"
                            }`}
                        >
                            <img src={item.icon} alt={item.name} className="me-2" width="24" height="24" />
                            <span>{item.name}</span>
                        </motion.div>
                    </Link>
                ))}

                <h6 className="text-secondary mt-4">Settings</h6>
                {settings.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className={`d-flex align-items-center p-2 mb-2 rounded ${
                                pathname === item.href ? "bg-primary text-white" : "text-dark bg-light"
                            }`}
                        >
                            <img src={item.icon} alt={item.name} className="me-2" width="24" height="24" />
                            <span>{item.name}</span>
                        </motion.div>
                    </Link>
                ))}
            </nav>

            <motion.div
                className="mt-4 p-3 bg-primary text-white rounded shadow-sm cursor-pointer position-relative overflow-hidden"
                onClick={() => router.push("/dashboard/grow-business")}
            >
                <div className="position-absolute top-0 end-0 bg-cover opacity-50" style={{ backgroundImage: "url('/dashboard/cover.png')", width: "60px", height: "60px" }} />
                <div className="position-relative">
                    <h5 className="fw-bold">Grow Business</h5>
                    <p className="small">Explore our marketing solutions</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-light text-primary mt-2"
                    >
                        Read More
                    </motion.button>
                </div>
            </motion.div>
        </aside>
    );
};

export default Sidebar;