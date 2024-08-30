"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.scss";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (isSidebarOpen && !event.target.closest(`.${styles.header_nav}`) && !event.target.closest(`.${styles.burger_menu}`)) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <Image alt="logo" src="/images/logo.png" width={250} height={100} />
        </div>
        <button className={styles.burger_menu} onClick={toggleSidebar}>
          &#9776;
        </button>
        <nav className={`${styles.header_nav} ${isSidebarOpen ? styles.open : ""}`}>
          <ul className={styles.header_nav_menu}>
            <li className={styles.header_nav_menu_item}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={styles.header_nav_menu_item}>
              <Link href={"/hotels"}>Hotels</Link>
            </li>
            <li className={styles.header_nav_menu_item}>
              <Link href={"#facilites"}>Facilities</Link>
            </li>
            <li className={styles.header_nav_menu_item}>Why Us</li>
            <li className={styles.header_nav_menu_item}>
              <Link href={"#contacts"}>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
