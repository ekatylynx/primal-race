import styles from './EventRecapSection.module.css';
import RecapGrid from '../RecapGrid/RecapGrid';

export default function EventRecapSection() {
	return (
		<section className={`${'container'} ${styles.recap}`}>
			<div className={styles.text}>
				<span className={`${'subtitle-accent'} ${styles.subtitle}`}>Recap</span>
				<h2 className={`${'title-h2-accent'} ${styles.title}`}>
					the latest <span className='accent-color'>event recap </span>&
					<span className='accent-color'> testimonials</span>
				</h2>
			</div>
			<RecapGrid />
		</section>
	);
}
