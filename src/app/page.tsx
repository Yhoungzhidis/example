"use client";
import Image from 'next/image';
import styles from '@/app/styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Image 
          src="/col.png" // Update with the path to your image
          alt="Student Image"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.loginBox}>
          <div className={styles.logo}>
            <Image 
              src="/logo.png" // Update with the path to your logo
              alt="University Logo"
              width={150}
              height={80}
            />
          </div>
          <h2 className={styles.h2}>LOGIN</h2>
          <h2 className={styles.title}>ESUG - UG</h2>
          <form>
            <input 
              type="text" 
              placeholder="Enter your ID" 
              className={styles.inputField} 
            />
            <input 
              type="password" 
              placeholder="Enter Password" 
              className={styles.inputField} 
            />
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
            <button type="submit" className={styles.loginButton}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
