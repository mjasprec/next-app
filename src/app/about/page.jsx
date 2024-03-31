import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About NFT Marketplace</h2>
        <h1 className={styles.title}>
          consectetur adipisicing elit. Vero blanditiis.
        </h1>
        <p className={styles.description}>
          lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>7 K+</h1>
            <p>Sold NFTs</p>
          </div>

          <div className={styles.box}>
            <h1>7 K+</h1>
            <p>Transactions</p>
          </div>

          <div className={styles.box}>
            <h1>20 K+</h1>
            <p>Users</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src='/about.png'
          // src='https://images.pexels.com/photos/7589354/pexels-photo-7589354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='about us'
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
