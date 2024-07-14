"use client";
import React from "react";
import Menu from "./Menu"; // Import your Menu component
import AnimatedNavbar from "./AnimatedNavbar"; // Import your AnimatedNavbar component
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return isMobile ? <Menu /> : <AnimatedNavbar />;
};

export default Navbar;
