import styles from "../styles/Intro.module.css"
import Image from 'next/image'
import Circle from '../components/Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
        <div className={styles.card}>
          <h1 className={styles.title}>
            <span className={styles.brand}>AVOCADO</span>
            DIGITAL PRODUCT AGENCY
          </h1>
          <p className={styles.desc}>
             CREATE sth
          </p>
          <button className={styles.button}>
                DISCOVER
          </button>

        </div>
        <div className={styles.card}>
            <Image 
            src="/img/Avocado.png"
            width="400" 
            height="400"
            alt=""
          
            >

            </Image>

        </div>
       
    </div>
  )
}

export default Intro
