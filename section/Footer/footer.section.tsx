import React from "react";

import styles from "./footer.module.css";
import PlayStoreButton from "@/components/Icons/PlayStoreButton";
import AppleStoreButton from "@/components/Icons/AppleStoreButton";
import IconButton from "@/components/button/iconButton.component";
import FaceBookIcon from "@/components/Icons/FaceBookIcon";
import YouTubeIcon from "@/components/Icons/YouTubeIcon";
import { ButtonType } from "@/components/button/button.component";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import { NavLink } from "@/components/navbar/navbar.component";
import Link from "next/link";
import SendIcon from "@/components/Icons/SendIcon";

const Footer: React.FC = () => {
  const navLinks: NavLink[] = [
    { value: "#", label: "Home" },
    { value: "#features", label: "Features" },
    { value: "#how-it-works", label: "How it works" },
    { value: "#about-us", label: "About us" },
    { value: "#testimonials", label: "Testimonial" },
  ];

  return (
    <footer className={styles.container} id="footer">
      <div className={styles.containerBanner}>
        <h3>Your Destination for Affordable and Exciting Event Experiences</h3>
        <h4>Download the App Now!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <div className={styles.storeContainer}>
          <button className={styles.storeButton}>
            <PlayStoreButton className={styles.storeIcon} />
          </button>
          <button className={styles.storeButton}>
            <AppleStoreButton className={styles.storeIcon} />
          </button>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.linksContainer}>
          <div className={styles.companyInfo}>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className={styles.companyLinks}>
              <IconButton
                icon={<FaceBookIcon className={styles.linksIcon} />}
                type={ButtonType.TER}
              />
              <IconButton
                icon={<YouTubeIcon className={styles.linksIcon} />}
                type={ButtonType.TER}
              />
              <IconButton
                icon={<TwitterIcon className={styles.linksIcon} />}
                type={ButtonType.TER}
              />
            </div>
          </div>
          <div className={styles.companyLinks2}>
            <div className={styles.companyNav}>
              <h6>Company</h6>
              <div className={styles.companyNavLinks}>
                {navLinks.map((navlink, index: number) => (
                  <Link
                    key={index}
                    href={navlink.value}
                    className={styles.companyNavLink}
                  >
                    {navlink.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.companyNav}>
              <h6>Contact</h6>
              <div className={styles.companyNavLinks}>
                <p className={styles.companyNavLink}>(406) 555-0120</p>
                <p className={styles.companyNavLink}>www.example.com</p>
                <p className={styles.companyNavLink}>example@gmail.com</p>
                <p className={styles.companyNavLink}>
                  56, Rajar Golli, Amborkhana, Sylhet
                </p>
              </div>
            </div>
          </div>
          <div className={styles.companyNav}>
            <h6>Get the latest information</h6>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Email" />
              <div className={styles.sendButton}>
                <SendIcon className={styles.sendIcon} />
              </div>
            </div>
          </div>
          <div className={styles.companyLinksBottom}>
            <IconButton
              icon={<FaceBookIcon className={styles.linksIcon} />}
              type={ButtonType.TER}
            />
            <IconButton
              icon={<YouTubeIcon className={styles.linksIcon} />}
              type={ButtonType.TER}
            />
            <IconButton
              icon={<TwitterIcon className={styles.linksIcon} />}
              type={ButtonType.TER}
            />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.footer}>
          <p>
            Copyright © {new Date().getFullYear()} Event Booking Dot. All Rights
            Reserved.
          </p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
