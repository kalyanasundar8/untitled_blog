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
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex md:items-center md:space-x-5">
          {links.map(({ id, text, href }) => (
            <NavLink key={id} text={text} href={href} className="text-sm text-gray-500 font-medium hover:text-blue-600"/>
          ))}
        </div>
        <CTAButton
          label="Get Started"
          className="bg-blue-200 text-blue-600 text-sm font-semibold px-3 py-2 rounded-sm"
        />
      </div>
    </div>
  );
}
