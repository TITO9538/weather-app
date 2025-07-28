import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed bottom-2 right-2 hover:scale-110 transition-transform duration-300 p-2 cursor-pointer">
      {/* MOON ICON */}
      <div className={`p-2 bg-[#e6e9fe] rounded-full ${isDark ? "hidden" : "inline-block"}`}>
        <FaMoon className={`w-8 h-8 ${isDark ? "hidden" : "inline-block"} text-[#44497a]`} />
      </div>

      {/* SUN ICON */}
      <div className={`p-2 ${!isDark ? "hidden" : "inline-block"}`}>
        <FaSun className={`w-8 h-8 ${isDark ? "inline-block" : "hidden"} text-slate-500`} />
      </div>
    </button>
  );
}
