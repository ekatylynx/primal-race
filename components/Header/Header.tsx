// app/components/Header.tsx
'use client'; // Если используете хуки (useState, useEffect)

import Link from 'next/link';
import styles from './Header.module.css';
import Logo from '../../public/logo2.png';
import Image from 'next/image';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.container}>
				<BurgerMenu />
				<div className='flex justify-between items-center'>
					<Link href='/' className={`${'text-xl font-bold'} ${styles.link}`}>
						<Image src={Logo} alt='Website icon' className={styles.logotype} />
					</Link>
				</div>
				<div className={styles.rightSide}></div>
			</nav>
		</header>
	);
}
