import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, person } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const sectionIds = navLinks.map((link) => link.id)

const linkBase = 'rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-accent'
