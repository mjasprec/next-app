import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>MJ Asprec</div>
      <div className={styles.text}>
        &copy; 2024 White Cloak Technologies Inc.
      </div>
    </footer>
  );
};

export default Footer;
