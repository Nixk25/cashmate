import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { NAVLINKS } from "@/app/lib/constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const menuVariants = {
    initial: {
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      x: "-100%",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const listVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
      <div className={`absolute z-[999] top-2 right-2 `}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 w-full origin-left bg-white h-dvh"
          >
            <div className="container relative flex items-center justify-center h-full ">
              <motion.ul
                variants={listVariants}
                initial="initial"
                animate="visible"
                exit="initial"
                className="flex flex-col items-center justify-center gap-3 text-2xl font-bold transition-all duration-300 hover:text-primary"
              >
                {NAVLINKS.map(({ title, href }, i) => {
                  return (
                    <div key={i} className="overflow-hidden">
                      <NavLink
                        closeMenu={closeMenu}
                        title={title}
                        href={href}
                      />
                    </div>
                  );
                })}
              </motion.ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

type navLinkProps = {
  title: string;
  href: string;
  closeMenu: () => void;
};

const NavLink = ({ title, href, closeMenu }: navLinkProps) => {
  const navLinkVariants = {
    initial: {
      x: "-30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <motion.div variants={navLinkVariants} onClick={closeMenu}>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Menu;
