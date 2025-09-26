import styles from './FeedBack.module.css';

export default function FeedBack() {
  return (
    <div className={styles.feedBack}>
      <h4 className={styles.title}>Contact us</h4>
      <p className={styles.subtitle}>We usually respond before 24 hours.</p>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="text" placeholder="Message" className={styles.input} />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};