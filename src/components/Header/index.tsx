/* eslint-disable prettier/prettier */
import Image from 'next/image';
import styles from './header.module.scss';


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div >
        <img src="/images/logo.svg" alt="logo" />
      </div>
    </header>
  )
}
