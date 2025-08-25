// FILE: src/components/TopBar.jsx
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Globe2,
  Briefcase,
  Trophy,
  Atom,
  Clapperboard,
  HeartPulse,
  Plane,
  Utensils,
  Wallet,
  Landmark,
  Shirt,
} from "lucide-react";

const ICONS = {
  Tech: Laptop,
  World: Globe2,
  Business: Briefcase,
  Sports: Trophy,
  Science: Atom,
  Entertainment: Clapperboard,
  Health: HeartPulse,
  Travel: Plane,
  Food: Utensils,
  Finance: Wallet,
  India: Landmark,
  Lifestyle: Shirt,
};

export default function TopBar({ items, value, onChange }) {
  const scroller = useRef(null);
  return (
    <div className="bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-screen-lg mx-auto px-4">
        <div
          ref={scroller}
          className="flex gap-2 overflow-x-auto no-scrollbar py-2"
        >
          {items.map((name) => {
            const Icon = ICONS[name] || Laptop;
            const active = value === name;
            return (
              <button
                key={name}
                onClick={() => onChange(name)}
                className={`relative shrink-0 px-3 sm:px-4 py-2 rounded-full border text-sm flex items-center gap-2 transition ${
                  active
                    ? "text-black bg-neutral-300"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
