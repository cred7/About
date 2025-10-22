import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navitems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsscrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setIsscrolled(window.screenX > 10);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ",
        isScrolled ? "py-3 bg-red-400 m-1" : "py-5 "
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span
              className="text-glow text-blue-400
            "
            >
              Cj's
            </span>{" "}
            Portfolio
          </span>
        </a>
        {/* {mobile nav} */}

        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenu ? "close Menu" : "Open Menu"}
        >
          {isMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-red-400 backdrop-blur-md z-40 flex-col items-center justify-content",
            "transition-all duration-300 pt-40 md:hidden",
            isMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl  ">
            {navitems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenu(false)}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* {desktop nav} */}
        <div className="hidden md:flex space-x-8 ">
          {navitems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
