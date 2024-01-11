import Link from "next/link";
import React, { useState } from "react";

import styles from "./navbar.module.css";
import Button, { ButtonSize } from "../button/button.component";
import { useRouter } from "next/router";

const NavBar: React.FC<Props> = ({ position = 0 }) => {
  const router = useRouter();
  const [active, setActinve] = useState<boolean>(false);
  const navLinks: NavLink[] = [
    { value: "#", label: "Home" },
    { value: "#features", label: "Features" },
    { value: "#how-it-works", label: "How it works" },
    { value: "#about-us", label: "About us" },
    { value: "#testimonials", label: "Testimonial" },
    { value: "#blog", label: "Blog" },
  ];
  return (
    <nav
      className={`${styles.navbar} ${
        position > 100 ? styles.navbarShadow : ""
      }`}
    >
      <div className={styles.navbarIcon}></div>
      <div className={styles.navbarLinks}>
        <Link
          href={navLinks[0].value}
          className={`${styles.navbarLink}   ${
            router.asPath?.toLowerCase() === "/#" ||
            router.asPath?.toLowerCase() === "/"
              ? "!text-main-theme-color"
              : ""
          }`}
        >
          {navLinks[0].label}
        </Link>
        {navLinks.slice(1, 6).map((navlink: NavLink, index: number) => (
          <Link
            href={navlink.value}
            className={`${styles.navbarLink}  ${
              router.asPath?.toLowerCase().includes(navlink.value.toLowerCase())
                ? "!text-main-theme-color"
                : ""
            }`}
            key={index + navlink.value}
          >
            {navlink.label}
          </Link>
        ))}
      </div>
      <div className={styles.navbarButton}>
        <Button text="Get the App" size={ButtonSize.MEDIUM} />
      </div>
      <div className={styles.navButtonMD} onClick={() => setActinve(!active)}>
        <div
          className={[
            styles?.navIndicator,
            active && styles.navIndicatorActive,
          ].join(" ")}
        />
      </div>
      <div
        className={[
          styles.navbarLinksMD,
          active && styles.navbarLinksMDActive,
        ].join(" ")}
      >
        <div className={styles.linksContainer}>
          <Link
            href={navLinks[0].value}
            className={`${styles.navbarLink}   ${
              router.asPath?.toLowerCase() === "/#" ||
              router.asPath?.toLowerCase() === "/"
                ? "!text-main-theme-color"
                : ""
            }`}
          >
            {navLinks[0].label}
          </Link>
          {navLinks.slice(1, 6).map((navlink: NavLink, index: number) => (
            <Link
              href={navlink.value}
              className={`${styles.navbarLink}  ${
                router.asPath
                  ?.toLowerCase()
                  .includes(navlink.value.toLowerCase())
                  ? "!text-main-theme-color"
                  : ""
              }`}
              key={index + navlink.value}
            >
              {navlink.label}
            </Link>
          ))}
          <div className="mt-12">
            <Button text="Get the App" size={ButtonSize.MEDIUM} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

interface Props {
  position?: number;
}

export interface NavLink {
  label: string;
  value: string;
}
