import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
    RiDashboardFill, RiShoppingCartFill, RiCustomerService2Fill, RiSettings5Fill,
    RiFileList2Fill, RiFileChartFill, RiArticleFill, RiMailSendFill, RiFolderAddFill,
    RiFolderChartFill, RiUserStarFill, RiCouponFill, RiMailFill, RiFileTextFill,
    RiAddBoxFill, RiFolder3Fill
} from "react-icons/ri";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const menuItems = [
    { name: "Dashboard", icon: <RiDashboardFill />, href: "/admin/dashboard" },
    {
        name: "Products", icon: <RiShoppingCartFill />, href: "/admin/products",
        subTabs: [
            { name: "All Products", icon: <RiFileTextFill />, href: "/admin/products/all" },
            { name: "Add Product", icon: <RiAddBoxFill />, href: "/admin/products/add" },
            { name: "Categories", icon: <RiFolder3Fill />, href: "/admin/products/categories" },
            { name: "Inventory", icon: <RiFolderChartFill />, href: "/admin/products/inventory" },
        ],
    },
    {
        name: "Orders", icon: <RiFileList2Fill />, href: "/admin/orders",
        subTabs: [
            { name: "All Orders", icon: <RiFileTextFill />, href: "/admin/orders/all" },
            { name: "Pending Orders", icon: <RiFolderAddFill />, href: "/admin/orders/pending" },
            { name: "Completed Orders", icon: <RiFolderChartFill />, href: "/admin/orders/completed" },
        ],
    },
    {
        name: "Customers", icon: <RiCustomerService2Fill />, href: "/admin/customers",
        subTabs: [
            { name: "All Customers", icon: <RiUserStarFill />, href: "/admin/customers/all" },
            { name: "Loyalty Program", icon: <RiCouponFill />, href: "/admin/customers/loyalty" },
        ],
    },
    {
        name: "Marketing", icon: <RiMailSendFill />, href: "/admin/marketing",
        subTabs: [
            { name: "Campaigns", icon: <RiFolderAddFill />, href: "/admin/marketing/campaigns" },
            { name: "Discounts & Coupons", icon: <RiCouponFill />, href: "/admin/marketing/discounts" },
            { name: "Email Marketing", icon: <RiMailFill />, href: "/admin/marketing/email" },
        ],
    },
    {
        name: "Blog", icon: <RiArticleFill />, href: "/admin/blog",
        subTabs: [
            { name: "All Posts", icon: <RiFileTextFill />, href: "/admin/blog/posts" },
            { name: "Add New Post", icon: <RiAddBoxFill />, href: "/admin/blog/add" },
            { name: "Categories", icon: <RiFolder3Fill />, href: "/admin/blog/categories" },
        ],
    },
    { name: "Reports", icon: <RiFileChartFill />, href: "/admin/reports" },
    { name: "Settings", icon: <RiSettings5Fill />, href: "/admin/settings" },
];

const Sidebar= () => {
    const navigate = useNavigate();
    const [openSections, setOpenSections] = useState<{ [key]: boolean}>({});

    const toggleSection = (name) => {
        setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <aside className="fixed top-16 w-64 h-[calc(100vh-65px)] flex flex-col shadow-lg bg-white z-5 pt-2">
            <div className="flex-1 overflow-y-auto px-4 pt-2 pb-6">
                <nav>
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            <div
                                onClick={() => item.subTabs && toggleSection(item.name)}
                                className="flex items-center px-4 py-2 my-1 cursor-pointer rounded-md transition-all duration-200 text-gray-600 hover:bg-gray-100"
                            >
                                <span className="text-xl mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                                {item.subTabs && (
                                    <span className="ml-auto">
                                        {openSections[item.name] ? <MdExpandLess /> : <MdExpandMore />}
                                    </span>
                                )}
                            </div>
                            {item.subTabs && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openSections[item.name] ? "auto" : 0, opacity: openSections[item.name] ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pl-8 overflow-hidden"
                                >
                                    {item.subTabs.map((subTab) => (
                                        <NavLink
                                            key={subTab.name}
                                            to={subTab.href}
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-1 text-sm rounded-md transition-all duration-200 ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`
                                            }
                                        >
                                            
                                            <span className="text-lg mr-2">{subTab.icon}</span>
                                            {subTab.name}
                                        </NavLink>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
