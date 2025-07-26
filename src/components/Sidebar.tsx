"use client";
import { useState } from "react";
import {
  FaUser,
  FaChartLine,
  FaEnvelope,
  FaGithub,
  FaBars,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";
import { SiQiita } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: "#profile", icon: <FaUser />, label: "Profile" },
  { href: "#projects", icon: <HiMiniSquare2Stack />, label: "Projects" },
  { href: "#experience", icon: <FaChartLine />, label: "Experience" },
  { href: "#certificates", icon: <PiCertificateFill />, label: "Certificates" },
  { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
];

const socialLinks: SocialLink[] = [
  { href: "https://github.com/Hikaribamboo", icon: <FaGithub /> },
  { href: "https://twitter.com/blanka0503", icon: <FaSquareXTwitter /> },
  { href: "https://qiita.com/Hikaribamboo", icon: <SiQiita /> },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <button
        className="sm:hidden fixed top-4 left-4 z-50 text-2xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>
      <div className="hidden sm:flex flex-col items-center justify-between w-56 h-screen bg-blue-50 py-12">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.webp"
            alt="Your profile"
            width={108}
            height={108}
            className="rounded-full mb-4 border-4 border-white"
          />
          <h1 className="text-xl font-bold">清水ひかり</h1>
          <p className="text-gray-500 text-sm mb-8">Junior Developer</p>

          <nav className="space-y-2">
            {navItems.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-200 text-gray-700"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex space-x-4 mt-8">
          {socialLinks.map(({ href, icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-500 hover:text-gray-800 text-xl">
                {icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
