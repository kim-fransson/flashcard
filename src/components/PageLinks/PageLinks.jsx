"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./PageLinks.module.css";

function PageLink({ children, current, ...delegated }) {
  return (
    <div className={styles.pageLinkWrapper}>
      {current && (
        <motion.div
          layoutId='page-link-background'
          className={styles.background}
        />
      )}
      <Link
        className={clsx(styles.pageLink, current && styles.current)}
        {...delegated}
      >
        {children}
      </Link>
    </div>
  );
}

function PageLinks() {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div className={styles.base}>
        <PageLink href='/study' current={pathname === "/study"}>
          Study Mode
        </PageLink>
        <PageLink
          href='/flashcards'
          current={pathname === "/flashcards"}
        >
          All Cards
        </PageLink>
      </div>
    </AnimatePresence>
  );
}

export default PageLinks;
