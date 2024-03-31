import Link from 'next/link';
import styles from './signin.module.css';
import Image from 'next/image';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='/about.png'
          alt='about us'
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='password'
            placeholder='Password'
          />

          <button type='button'>Sign in</button>
        </form>
        <Link
          href='/auth/signup'
          className={styles.signUpLink}
        >
          Not yet registered? Signup
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
