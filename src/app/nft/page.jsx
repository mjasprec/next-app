import NftCard from '@/components/nftCard/NftCard';
import styles from './nft.module.css';

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const Nft = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <NftCard
          key={post.userId}
          post={post}
        />
      ))}
    </div>
  );
};

export default Nft;
