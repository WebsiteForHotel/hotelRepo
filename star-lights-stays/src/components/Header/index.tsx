"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <Image alt="logo" src="/images/logo.png" width={250} height={100} />
        </div>
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_menu}>
            <li className={styles.header_nav_menu_item}>
           <Link href={"/"}>   Home</Link>
            </li>
            <li className={styles.header_nav_menu_item}>
              <Link href={"#facilites"}>Facilities</Link>
            </li>
            <li className={styles.header_nav_menu_item}>
              Why Us
            </li>
            <li className={styles.header_nav_menu_item}>
              Contacts
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
