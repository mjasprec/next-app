import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link
        href={`/`}
        className={styles.logo}
      >
        NFT-Marketplace
      </Link>
      <Links />
    </nav>
  );
};

export default Navbar;
