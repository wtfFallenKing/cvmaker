import styles from '../styles/Homepage.module.css'

const Homepage = () => {
  return (
    <>
    <div className={styles.info}>
      <div className={styles.palette}>
        <div className={styles.first1}> <div className={styles.tip11}>#222831</div> </div>
        <div className={styles.second1}> <div className={styles.tip12}>#31363F</div> </div>
        <div className={styles.third1}> <div className={styles.tip13}>#76ABAE</div> </div>
        <div className={styles.fourth1}> <div className={styles.tip14}>#EEEEEE</div> </div>
      </div>
      <div className={styles.palette}>
        <div className={styles.first2}> <div className={styles.tip21}>#FFE6E6</div> </div>
        <div className={styles.second2}> <div className={styles.tip22}>#E1AFD1</div> </div>
        <div className={styles.third2}> <div className={styles.tip23}>#AD88C6</div> </div>
        <div className={styles.fourth2}> <div className={styles.tip24}>#7469B6</div> </div>
      </div>
      <div className={styles.palette}>
        <div className={styles.first3}> <div className={styles.tip31}>#496989</div> </div>
        <div className={styles.second3}> <div className={styles.tip32}>#58A399</div> </div>
        <div className={styles.third3}> <div className={styles.tip33}>#A8CD9F</div> </div>
        <div className={styles.fourth3}> <div className={styles.tip34}>#E2F4C5</div> </div>
      </div>
      <div className={styles.palette}>
        <div className={styles.first4}> <div className={styles.tip41}>#35374B</div> </div>
        <div className={styles.second4}> <div className={styles.tip42}>#344955</div> </div>
        <div className={styles.third4}> <div className={styles.tip43}>#50727B</div> </div>
        <div className={styles.fourth4}> <div className={styles.tip44}>#78A083</div> </div>
      </div>
    </div>
    <h2 className={styles.normalh2}>Не знаю, что сюда написать. Держите палетки</h2>
    </>
  )
}

export default Homepage