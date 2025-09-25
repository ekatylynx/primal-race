import styles from './ExpansionSection.module.css';

export default function ExpansionSection() {
	return (
		<section className={`${'container'} ${styles.expansion}`}>
			<div className={styles.textContainer}>
				<span className={`${'subtitle-accent'} ${styles.subtitle}`}>
					Coming soon to new destinations worldwide.
				</span>
				<h2 className={`${'title-h2-accent'} ${styles.title}`}>
					Global <span className='accent-color'>Expansion</span>
				</h2>
			</div>

			<div className={styles.video}></div>
		</section>
	);
}
