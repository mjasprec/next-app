import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          // src='/about.png'
          src='https://images.pexels.com/photos/7589354/pexels-photo-7589354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='about us'
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
