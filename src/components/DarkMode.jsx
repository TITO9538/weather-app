import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import AnimatedContent from "./reactBits/AnimatedContent";
import FadeContent from "./reactBits/FadeContent";

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
    <div className="fixed bottom-3 right-3 z-50">
      <FadeContent delay={1500} blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="hover:scale-110 transition-transform duration-300 p-2 cursor-pointer bg-transparent rounded-full">
          {isDark ? (
            <FaSun className="w-7 h-7 text-slate-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"/>
          ) : (
            <FaMoon className="w-7 h-7 text-slate-200 drop-shadow-[0_0_3px_rgba(68,73,122,0.8)]"/>
          )}
        </button>
      </FadeContent>
    </div>
  );
}
