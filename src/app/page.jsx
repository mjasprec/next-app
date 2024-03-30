import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>NFT Marketplace</h1>
        <p className={styles.description}>
          orem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.buttons}>
          <button
            type='button'
            className={styles.button}
          >
            Learn more
          </button>
          <button
            type='button'
            className={styles.button}
          >
            Contact
          </button>
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
