import styles from './Dial.module.scss';

function Dial() {
  return (
    <div className={styles.Dial}>
      <div className={styles.OuterRing} />
      <div className={styles.InnerRing}>
        <span className={styles.Arrow} />
        <span className={styles.BottomCover} />
        <div>
          80.4°
        </div>
      </div>
    </div>
  );
}

export default Dial;
