"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlinePicture,
} from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const links = [
    { name: "Home", icon: <AiOutlineHome />, href: "/" },
    { name: "About", icon: <AiOutlineUser />, href: "#about" },
    { name: "Work", icon: <AiOutlineAppstore />, href: "#projects" },
    // { name: "Blog", icon: <FaBlog />, href: "#blog" },
    // { name: "Gallery", icon: <AiOutlinePicture />, href: "#gallery" },
    { name: "Contact", icon: <AiOutlineMail />, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-white/70 dark:bg-black/40
        border border-white/20 dark:border-white/10
        shadow-lg rounded-full
        px-6 py-2
        flex items-center gap-4
      "
    >
      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="
              flex items-center gap-2 px-3 py-1.5
              rounded-full transition-all
              hover:bg-gray-200/60 dark:hover:bg-white/10
              text-sm
            "
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-2" />

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="
          p-2 rounded-full
          hover:bg-gray-200/60 dark:hover:bg-white/10
          transition-all
        "
      >
        {theme === "light" ? (
          <BsMoonStars className="h-5 w-5" />
        ) : (
          <BsSun className="h-5 w-5" />
        )}
      </button>
    </motion.nav>
  );
}
