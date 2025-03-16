import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const tabs = [
    { href: "/dashboard", icon: "/dashboard/dashboard.png", label: "Home" },
    { href: "/funds", icon: "/dashboard/funds.png", label: "Funds" },
    { href: "/startups", icon: "/dashboard/plus.png", label: "Create", special: true },
    { href: "/startups", icon: "/dashboard/knowledge.png", label: "Startups" },
    { href: "/profile", icon: "/dashboard/founder.png", label: "Profile" },
];

export default function Tabs() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const pathname = usePathname(); // Using Next.js native pathname hook

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <motion.div
            className="fixed bottom-[-38px] w-full min-h-[100px] bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.1)]"
            initial={{ y: 100 }}
            animate={{ y: visible ? 0 : 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true }}
        >
            <div className="container px-4 py-[6px] m-1 flex justify-between items-center">
                {tabs.map((tab, index) => {
                    const isActive = pathname.startsWith(tab.href);
                    return (
                        <Link key={index} href={tab.href} className="flex flex-col items-center">
                            <motion.img
                                src={tab.icon}
                                className={`w-7 ${tab.special ? "bg-gray-600 p-1 rounded-full" : ""}`}
                                alt={tab.label}
                                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                                transition={{ type: "spring", stiffness: 150 }}
                            />
                            <motion.p
                                className={`text-gray-600 font-semibold text-[12px] ${isActive ? "font-bold text-black" : ""}`}
                                animate={isActive ? { opacity: 1, y: -2 } : { opacity: 0.8, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {tab.label}
                            </motion.p>
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    );
}
