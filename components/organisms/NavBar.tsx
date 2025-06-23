import React from "react";
import NavLinks from "../molecules/NavLinks";

export default function NavBar() {
  return (
    <div className="border-b-2 border-gray-50">
      <nav className="container mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-center">Untitled Blog</h1>
          <div>
            <NavLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}
