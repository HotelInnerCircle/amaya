"use client";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaCarSide, FaTools } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { FiLogOut, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SidebarMenuItem from "./sidebarmenu";
import { MdOutlineCurrencyRupee, MdContacts, MdEmail } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { GoTools } from "react-icons/go";
import axios from "axios";
import { ImWindows8 } from "react-icons/im";
import { VscBook } from "react-icons/vsc";

export default function Sidebar({ isCollapsed, toggleSidebar, pathname }) {
  const router = useRouter();
  const [truevalueOpen, setTruevalueOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("/api/admin/logout", {}, { withCredentials: true });
      toast.success("Logged out successfully");
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <div
      className={`fixed min-h-[95vh] h-[calc(100vh-24px)] ${isCollapsed ? "w-[80px]" : "w-[250px]"
        } bg-white flex flex-col transition-all duration-300 rounded-xl my-3 mx-3 justify-between shadow-md`}
    >
      {/* ======= TOP SECTION ======= */}
      <section>
        <div
          className={`flex ${isCollapsed ? "justify-center" : "justify-between"
            } items-center pt-10`}
        >
          {!isCollapsed && (
            <div className="w-3/4 px-4">
              <Image
                src="/assests/Amaya_Logo_Final.png"
                alt="logo"
                width={300}
                height={300}
                className="w-auto h-12 mb-1 duration-500 rounded-lg md:h-14"
              />
            </div>
          )}

          <div
            className={`px-4 cursor-pointer ${isCollapsed
                ? "w-full flex justify-center"
                : "w-1/4 flex justify-end"
              }`}
            onClick={toggleSidebar}
          >
            <HiMenu className="text-3xl text-black" />
          </div>
        </div>

        {/* ======= MENU ITEMS ======= */}
        <div className="flex flex-col mx-2 mt-7">
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Dashboard"
            to="/admin/dashboard"
            icon={ImWindows8}
            active={pathname === "/admin/dashboard"}
          />


          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Contact Us"
            to="/admin/contact-us"
            icon={MdContacts}
            active={pathname === "/admin/contact-us"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Email"
            to="/admin/email"
            icon={MdEmail}
            active={pathname === "/admin/email"}
          />
        </div>
      </section>

      {/* ======= LOGOUT ======= */}
      <div
        className={`w-full text-black flex items-center mb-6 cursor-pointer ${isCollapsed ? "justify-center" : "ml-11"
          }`}
        onClick={handleLogout}
      >
        <FiLogOut className="text-xl" />
        {!isCollapsed && <span className="pl-4 whitespace-nowrap">Logout</span>}
      </div>
    </div>
  );
}
