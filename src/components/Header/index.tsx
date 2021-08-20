import Image from 'next/image';
import Link from 'next/link';

import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        
        <SignInButton />
      </div>
    </header>
  )
}