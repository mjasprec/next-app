import Image from 'next/image';
import styles from './nftCard.module.css';
import Link from 'next/link';

const NftCard = async ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='card'
            fill
            className={styles.image}
          />
          <span className={styles.date}>03.31.2024</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>

        <div>
          <p>Category:</p>
          <p>Price:</p>
        </div>

        <Link
          href={`/nft/${post.id}`}
          className={styles.buyBtn}
        >
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
