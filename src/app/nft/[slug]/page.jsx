import Image from 'next/image';
import styles from './singleNft.module.css';

const SingleNft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='card'
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Title</h2>

        <div className={styles.details}>
          <Image
            src='https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='card'
            height={50}
            width={50}
            className={styles.avatar}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Owner</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>3.31.2024</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Category</span>
            <span className={styles.detailValue}>Music</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Price</span>
            <span className={styles.detailValue}>$400</span>
          </div>
        </div>

        <div className={styles.content}>
          lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </div>
      </div>
    </div>
  );
};

export default SingleNft;
