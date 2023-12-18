/*
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 960px)");

  return (
    <nav className="relative mx-8 mb-24 flex justify-center items-center pt-6 pb-6 font-medium md:mx-16 lg:mx-32">
      {/* DESKTOP VIEW */ /*}
      {matches && (
        <div className="flex gap-20 items-center text-black">
          <a
            className="hover:text-neutral-300 transition ease-out duration-500"
            href="/autorent"
          >
            AUTORENT
          </a>
          <a
            className="hover:text-neutral-300 transition ease-out duration-500"
            href="/teenused"
          >
            TEENUSED
          </a>

          <h1 className="text-2xl font-bold text-amber-400 ">
            <a
              className="hover:text-amber-200 transition ease-out duration-500"
              href="/"
            >
              WEDLUX
            </a>
          </h1>

          <a
            className="hover:text-neutral-300 transition ease-out duration-500"
            href="/galerii"
          >
            GALERII
          </a>
          <a
            className="hover:text-neutral-300 transition ease-out duration-500"
            href="/kontakt"
          >
            KONTAKT
          </a>
        </div>
      )}

      {/* MOBILE VIEW */ /*}
      {!matches && (
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold text-amber-400">
            <a
              className="hover:text-amber-200 transition ease-out duration-500"
              href="/"
            >
              WEDLUX
            </a>
          </h1>
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="space-y-1.5 cursor-pointer z-50"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 32 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
          </div>
        </div>
      )}

      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-12 text-lg"
          >
            <motion.a variants={itemMotion} href="/autorent">
              AUTORENT
            </motion.a>
            <motion.a variants={itemMotion} href="/teenused">
              TEENUSED
            </motion.a>
            <motion.a variants={itemMotion} href="/galerii">
              GALERII
            </motion.a>
            <motion.a variants={itemMotion} href="/kontakt">
              KONTAKT
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
*/
