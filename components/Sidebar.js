"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHome, FaSuitcase, FaUserAstronaut,FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { ImBlogger } from "react-icons/im";
import { RiFolderUserFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Sidebar() {
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "About Me", link: "/about", icon: FaUserAstronaut },
    { name: "Skills", link: "/skills", icon: GiSkills },
    { name: "My Work", link: "/work", icon: FaSuitcase },
    { name: "Blogs", link: "/blogs", icon: ImBlogger },
    { name: "CV", link: "/cv", icon: RiFolderUserFill },
  ];

  const socials=[
    { name: "LinkedIn", link: "https://www.linkedin.com/in/amitjhariya/", icon: FaLinkedin },
    { name: "GitHub", link: "https://github.com/amitjhariya/", icon: FaGithub },
    { name: "Twitter", link: "https://twitter.com/amitjhariya93", icon: FaTwitter },
  ]

  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`bg-[#000000] min-h-screen ${
        open ? "w-72" : "w-16"
      } text-gray-100 duration-100 px-4`}
      aria-label="Sidebar"
    >
      <motion.div initial={{ x: -300 }} animate={{ x: 0 }}
      className="flex flex-col ">
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="my-6 flex justify-center ">
          <img
            src="/profile.jpg"
            alt="Amit Jhariya"
            className="w-32 rounded-full duration-500  profile-pic "
          />
        </div>
        <div className="mt-8  flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`group flex items-center  text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md `}
            >
              <div  >{React.createElement(menu?.icon,{className: 'menu-icon'})}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay:1,duration: 1 }}className={ `social ${open ? " flex gap-8  bottom-20 left-20" :"flex-col mt-8 gap-8 "}`}>
          {socials?.map((social, i) => (
            <Link href={social.link} key={i} className={`${open ? "" :"social-links "}`}>
                {React.createElement(social?.icon, {className: 'social-icon '})}
            </Link>
            
          ))}
        </motion.div>
      </motion.div>
    </aside>
  );
}

export default Sidebar;
