"use client";

import DashboardNavbar from "@/components/admin/layout/DashboardNavbar";
import MobileNavbar from "@/components/admin/layout/MobileNavbar";
import Sidebar from "@/components/admin/layout/Sidebar";
import Tabs from "@/components/admin/layout/Tabs";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="hidden md:flex">
                <Sidebar />
            </div>

            {/* <div className="flex-1 flex flex-col">
                <div className="bg-white hidden md:block">
                    <DashboardNavbar />
                </div>

                <div className="md:hidden fixed w-full">
                    <MobileNavbar />
                </div>

                <div className="flex flex-col mt-[4rem] md:mt-[5rem] md:ml-[18rem] md:w-[75%] w-full px-4">
                    {children}
                </div>

                {pathname.startsWith("/admin") && (
                    <div className="md:hidden fixed bottom-0 w-full bg-white shadow-lg">
                        <Tabs />
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default DashboardLayout;
