import styles from './ContactInfo.module.css';
import Logo from '../../public/logo2.png';
import Image from 'next/image';

export default function ContactInfo() {
  return (
    <div className={styles.contacts}>
      {/* <Logo /> */}
      <Image src={Logo} alt='Website icon' className={styles.logotype} draggable={false} />
      <address className={styles.address}>MAJID SULTAN BLDG, office No. 201-047, Al Muteena, Deira, 0000, Dubai</address>
      <span className={styles.title}>Email Address</span>
      <a className={`${styles.contactItem} ${styles.email}`} href="mailto:...">Primalrace@precisionevents.events</a>
      <span className={styles.title}>Phone Number</span>
      <a className={`${styles.contactItem} ${styles.phone}`} href="tel:...">+971 52 556 6894</a>
    </div>
  );
};
