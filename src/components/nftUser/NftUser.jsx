import styles from './nftUser.module.css';

const getUser = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return res.json();
};

const NftDetails = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.detailTitle}>Owner</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  );
};

export default NftDetails;
