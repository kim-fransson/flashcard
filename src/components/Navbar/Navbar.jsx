import Image from "next/image";
import Link from "next/link";

import React from "react";

import styles from "./Navbar.module.css";
import PageLinks from "../PageLinks";

function Navbar() {
  return (
    <nav className={styles.base}>
      <Link href='/'>
        <Image
          src='/images/logo-small.svg'
          width={40}
          height={40}
          alt='Home | Flashcard logo'
        />
      </Link>
      <PageLinks />
    </nav>
  );
}

export default Navbar;
