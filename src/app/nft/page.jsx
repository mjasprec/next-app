import NftCard from '@/components/nftCard/NftCard';
import styles from './nft.module.css';

const Nft = () => {
  return (
    <div className={styles.container}>
      <NftCard />
      <NftCard />
      <NftCard />
      <NftCard />
    </div>
  );
};

export default Nft;
