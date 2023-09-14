import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.gif' alt='facebook' width={26} height={26} />
        <Image src='/instagram.gif' alt='instagram' width={26} height={26} />
        <Image src='/linkedin.gif' alt='linkedin' width={26} height={26} />
        <Image src='/youtube.gif' alt='youtube' width={26} height={26} />
      </div>
      <div className={styles.logo}>BeatrowBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>
          Homepage
        </Link>
        <Link href='/' className={styles.link}>
          Contact
        </Link>
        <Link href='/' className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
