import Image from 'next/image';
import NftUser from '@/components/nftUser/NftUser';
import styles from './singleNft.module.css';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const SingleNft = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

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
        <h2 className={styles.title}>{post.title}</h2>

        <div className={styles.details}>
          <Image
            src='https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='card'
            height={50}
            width={50}
            className={styles.avatar}
          />

          <NftUser userId={post.userId} />

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

        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleNft;
