import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </nav>
  );
};

export default Navbar;
