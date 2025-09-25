import EventRecapSection from '../../components/EventRecapSection/EventRecapSection';
import EventsSection from '../../components/EventsSection/EventsSection';
import ExpansionSection from '../../components/ExpansionSection/ExpansionSection';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<section className='main-page container'>
				<div className={styles.main}>
					<div className={styles.info}>
						<span className={styles.subtitle}>
							Secure your spot, become a legend
						</span>
						<h1 className={styles.title}>
							Where <span>Strength </span>Meets <span>Resilience</span>
						</h1>
						<div className={styles.mainButtons}>
							<button className={styles.button}>REGISTER NOW</button>
							<button className={`${styles.button} ${styles.buttonGhost}`}>
								CONTACT US
							</button>
						</div>
					</div>
					<div className='main-contacts'></div>
					<div className={styles.partners}>
						<img className={styles.icon} src='/workids.svg' alt='Group' />
						<img className={styles.icon} src='/gymgang.svg' alt='Group' />
						<img className={styles.icon} src='/camptran.svg' alt='Group' />
						<img className={styles.icon} src='/worlcamp.svg' alt='Group' />
						<img className={styles.icon} src='/livepedianow.svg' alt='Group' />
					</div>
				</div>
			</section>
			<EventsSection />
			<ExpansionSection />
			<EventRecapSection />
		</>
	);
}
