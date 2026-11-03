import React from "react";
import Link from "next/link";
//import { Link } from "react-router-dom";
//import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
//import Home from "../page.tsx";
import About from "../app/about";
//import About from "../blog/about/about1.tsx";
//console.log("here");
//console.log({ Home });
export default function Layout() {
  return (
    <div>
      {/* className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Main Content */}
      {/* Small Button on the Right */}
      <div className="fixed bottom-6 right-6 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200 z-50">
        <Link href="/about">Connect</Link>
      </div>
    </div>
  );
}
