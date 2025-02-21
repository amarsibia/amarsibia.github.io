"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-switcher"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light text-gradient">
          Amar Sibia
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            {/* <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link> */}
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            {/* <Link href="#blog" className="hover:text-primary transition-colors">
              Blog
            </Link> */}
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Skills
            </Link>
            {/* <Link href="#blog" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Blog
            </Link> */}
            <Link href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

