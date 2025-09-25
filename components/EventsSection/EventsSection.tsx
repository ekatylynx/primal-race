import Image from 'next/image';
import styles from './EventsSection.module.css';
import Events from '../../public/events.png';

const menuItems = [
	{ key: '1', time: '12:04:10 left', location: 'Dubai' },
	{ key: '2', time: '46:14:29 left', location: 'Abu Dhabi' },
	{ key: '3', time: '72:58:69 left', location: 'Saudi Events' },
	{ key: '4', time: '72:58:69 left', location: 'Thailand' },
];

export default function EventsSection() {
	return (
		<section className={`${'container'} ${styles.eventsSection}`}>
			<div className={styles.events}>
				<div className={styles.titles}>
					<span className={styles.subtitle}>Events</span>
					<h2 className={styles.title}>
						Quick Event <span className={styles.accent}>Access</span>
					</h2>
				</div>
				<div className={styles.schedule}>
					<ul className={styles.list}>
						{menuItems.map((item, key) => (
							<li className={styles.item} key={key}>
								<span className={styles.time}>{item.time}</span>
								<span className={styles.location}>{item.location}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.image}>
				<Image src={Events} alt='Events Image' className={styles.imageIcon} />
			</div>
		</section>
	);
}
