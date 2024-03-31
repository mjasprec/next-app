import styles from './signup.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            name='username'
            type='text'
            placeholder='Username'
          />
          <input
            name='email'
            type='email'
            placeholder='Email Address'
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
          />
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
          />
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
          />
          <textarea
            name='about'
            id=''
            cols='30'
            rows='10'
            placeholder='About'
          />
          <input
            name='birthday'
            type='date'
            placeholder='Birthday'
          />
          <input
            name='wallet'
            type='number'
            placeholder='Wallet'
          />

          <div className={styles.genderContainer}>
            <label for='gender'>Gender</label>
            <div className={styles.genderMale}>
              <input
                checked
                type='radio'
                name='gender'
                value='male'
              />
              <label for='gender'>Male</label>
            </div>

            <div className={styles.genderFemale}>
              <input
                type='radio'
                name='gender'
                value='female'
              />
              <label for='gender'>Female</label>
            </div>
          </div>

          <button type='button'>Submit</button>
        </form>
        <Link
          href='/auth/signin'
          className={styles.signInLink}
        >
          Already registered? Sign in
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src='/about.png'
          alt='about us'
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default SignUp;
