"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

import {
  base,
  pageLinksWrapper,
  pageLink,
  active,
} from "./Navbar.module.css";
import clsx from "clsx";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={base}>
      <Link href='/'>
        <Image
          src='/images/logo-small.svg'
          width={40}
          height={40}
          alt='Home | Flashcard logo'
        />
      </Link>
      <div className={pageLinksWrapper}>
        <Link
          className={clsx(pageLink, pathname === "/study" && active)}
          href='/study'
        >
          Study Mode
        </Link>
        <Link
          className={clsx(
            pageLink,
            pathname === "/flashcards" && active
          )}
          href='/flashcards'
        >
          All Cards
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
