'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './BurgerMenu.module.css';
import Image from 'next/image';
import Menu from '../../public/menu.svg';

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const pathname = usePathname();

	// Blocking scroll when the menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			setIsMounted(true);
		} else {
			document.body.style.overflow = 'unset';
			// Wait for the animation to complete before removing from DOM
			const timer = setTimeout(() => setIsMounted(false), 300);
			return () => clearTimeout(timer);
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	// Close the menu when the page changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Handling the Escape key to close the menu
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [isOpen]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const menuItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About us' },
		{ href: '/events', label: 'Events' },
		{ href: '/train', label: 'Train' },
		{ href: '/contacts', label: 'Contact Us' },
	];

	return (
		<>
			<button
				className={`${styles.button} ${isOpen ? styles.burgerOpen : ''}`}
				onClick={toggleMenu}
				aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
				aria-expanded={isOpen}
			>
				<Image src={Menu} alt='Menu Icon' width={62} height={26} />
			</button>

			{/* Background dimming and menu are only rendered when needed */}
			{isMounted && (
				<>
					<div
						className={`${styles.overlay} ${
							isOpen ? styles.overlayVisible : ''
						}`}
						onClick={toggleMenu}
					/>

					<nav
						className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
						aria-hidden={!isOpen}
					>
						<div className={styles.menuContent}>
							<ul className={styles.menuList}>
								{menuItems.map((item) => (
									<li key={item.href} className={styles.menuItem}>
										<Link
											href={item.href}
											className={`${styles.menuLink} ${
												pathname === item.href ? styles.menuLinkActive : ''
											}`}
											onClick={() => setIsOpen(false)}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</>
			)}
		</>
	);
}
