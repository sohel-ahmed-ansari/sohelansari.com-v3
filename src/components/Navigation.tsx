import { MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "../utils";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "project", label: "Project" },
  { id: "additional-info", label: "Additional Info" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300`,
                  isScrolled &&
                    "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400",
                  !isScrolled && "text-white/90 hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-md p-2 md:hidden ${
              isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden dark:bg-gray-900 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col">
              {/* Close button */}
              <div className="flex justify-end pt-6 pr-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-md p-2 text-white transition-colors duration-300 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto pb-6">
                <nav className="flex flex-col space-y-1 px-4">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-indigo-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </>
      </div>
    </nav>
  );
}
