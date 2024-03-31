import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>NFT Marketplace</h1>
        <p className={styles.description}>
          lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.buttons}>
          <Link
            href={`/about`}
            className={styles.button}
          >
            Learn more
          </Link>
          <Link
            href={`/contact`}
            className={styles.button}
          >
            Contact
          </Link>
        </div>

        <div className={styles.brands}>
          <Image
            src='/brands.png'
            alt='brands'
            fill
            className={styles.brandImages}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src='/hero.gif'
          alt='hero'
          fill
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Home;
