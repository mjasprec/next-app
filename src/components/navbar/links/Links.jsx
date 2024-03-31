'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },

  {
    title: 'Contact',
    path: '/contact',
  },
];

const authenticatedUser = [
  {
    title: 'Wallet',
    path: '/wallet',
  },
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'NFT',
    path: '/nft',
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = false;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink
            item={link}
            key={link.title}
          />
        ))}

        {session ? (
          <>
            {authenticatedUser.map((link) => (
              <NavLink
                item={link}
                key={link.title}
              />
            ))}
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button
              type='button'
              className={styles.logout}
            >
              Sign out
            </button>
          </>
        ) : (
          <NavLink item={{ title: 'Sign in', path: '/auth/signin' }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src='/menu.png'
        alt='kebab menu'
        height={30}
        width={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink
              item={link}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
