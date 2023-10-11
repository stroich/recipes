import styles from './Spiner.module.css';

const SpinnerComponent = () => {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SpinnerComponent;
