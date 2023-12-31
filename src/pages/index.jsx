import Link from "next/link";

import styles from "@/styles/home.module.css";
import Logo from "@/components/logo";
import { SignInWithGoogleBtn, SubmitBtn } from "@/components/buttons";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <h1 className={styles.header}>Create Account</h1>
        <p className={styles.welcome_text}>For anyone in need of security.</p>
        <div className={styles.name_container}>
          <div className={styles.first_name}>
            <label className={styles.label} htmlFor='firstName'>
              First Name
            </label>
            <input
              className={styles.input}
              id='firstName'
              placeholder='Enter your email'
              type='text'
            />
          </div>
          <div className={styles.last_name}>
            <label className={styles.label} htmlFor='lastName'>
              Last Name
            </label>
            <input
              className={styles.input}
              id='lastName'
              placeholder='Enter your email'
              type='text'
            />
          </div>
        </div>
        <div>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input
            className={styles.input}
            id='email'
            placeholder='Enter your email'
            type='text'
          />
        </div>
        <div>
          <SubmitBtn className='mb-8' label='Continue' />
          <SignInWithGoogleBtn label='Continue with Google' />
        </div>
        <div className={styles.cta_container}>
          <p className={styles.cta}>Have an account? </p>
          <Link href='/' passHref>
            <p className={styles.signup_text}> Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
