"use client";
import React, { useState } from "react";
// Local Components
import NavLink from "../atoms/NavLink";
import CTAButton from "../atoms/CTAButton";
// Lucide-react icons

export default function NavLinks() {
  const [links, setLinks] = useState([
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About", href: "/about" },
  ]);

  return (
    <div>
      <div className="flex items-center space-x-7">
        <div className="hidden md:flex md:items-center md:space-x-7">
          {links.map(({ id, text, href }) => (
            <NavLink key={id} text={text} href={href} className="text-sm text-gray-500 font-medium hover:text-blue-600 transition duration-300 ease-in-out"/>
          ))}
        </div>
        <CTAButton
          label="Get Started"
          className="cursor-pointer bg-blue-200 text-blue-600 text-sm font-semibold px-3 py-2 rounded-sm hover:bg-blue-400/50 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
