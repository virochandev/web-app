import { motion } from "framer-motion";
import { Newspaper, Sparkles, Share2 } from "lucide-react";

export default function HomeHero({ onExplore }) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4 pt-10 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          SwiftShorts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-neutral-600 max-w-2xl"
        >
          Bite-sized news you can swipe through. Share a post, or dive into a
          category feed.
        </motion.p>
        <div className="mt-5 flex gap-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onExplore}
            className="px-4 py-2 rounded-full bg-white text-black text-sm"
          >
            Explore feed
          </motion.button>
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="#categories"
            className="px-4 py-2 rounded-full border border-neutral-300 text-sm"
          >
            Browse categories
          </motion.a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 flex items-center gap-3"
          >
            <Newspaper className="w-5 h-5" />
            <div className="text-sm">Vertical swipes on mobile</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5" />
            <div className="text-sm">Smooth desktop reading</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 flex items-center gap-3"
          >
            <Share2 className="w-5 h-5" />
            <div className="text-sm">Shareable post links</div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute -top-28 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(40% 40% at 70% 30%, #ffffff 0%, rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  );
}
