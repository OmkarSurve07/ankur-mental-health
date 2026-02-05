"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919769378751", "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+919769378751"
  }

  return (
    <header
      className={clsx(
        "top-0 z-50 w-full transition-all duration-300",
        isSticky
          ? "fixed bg-white/95 backdrop-blur shadow-md border-b border-orange-200"
          : "relative bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/ankur_white.jpeg"
              alt="Ankur Mental Health Services Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <span
                className="text-3xl font-semibold tracking-wide text-[#764b36]"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.15)" }}
              >
                Ankur
              </span>
              <p className="text-sm text-[#9B4922] leading-none">
                Heal. Nurture. Grow.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-[#643618] text-lg">
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#conditions">Conditions</a>
            <Link href="/blog">Blog</Link>
            <a href="/#contact">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">

            {/* Desktop CTA */}
            <div className="hidden md:flex space-x-2">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white p-3 rounded-full"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Button>

              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-orange-600 text-orange-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#764b36]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-200 shadow-sm">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-[#643618] text-lg">
            <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/#conditions" onClick={() => setMenuOpen(false)}>Conditions</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <div className="pt-4 flex flex-col space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>

              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-orange-600 text-orange-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
