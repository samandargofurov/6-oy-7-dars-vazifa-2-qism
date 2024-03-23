import styles from './App.module.css'
import img from './assets/image.png'
import apple from './assets/apple.svg'
import googlePlay from './assets/googleplay.svg'

function App() {

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brandName}>
            <a href="#"><div className={styles.logo}>K.</div></a>
            <a href="#"><span className={styles.title}>Kreed</span></a>
          </div>
          <div className={styles.pages}>
            <ul className={styles.ul}>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About us</li></a>
              <a href="#"><li>How it works</li></a>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
            <button className={styles.button}>Get Started</button>
          </div>      
        </header>

      </div>

      {/* hero */}
      <div className={styles.hero}>

          <div className={styles.heroGroup}>
              <div className={styles.text}>
              <div className={styles.heroTitle}>Connecting all your banking needs</div>
              <p className={styles.desc}>A smart mobile application you can control your business needs</p>
              <div className={styles.download}>
                <a href="#" className={styles.icon}><img src={apple} alt="" />Download App</a>
                <a href="#" className={styles.icon}><img src={googlePlay} alt="" />Download App</a>
              </div>
              </div>

              <div className={styles.img}>
                <img src={img} alt="phone picture" />
              </div>
          </div>

        </div>

    </>
  )
}

export default App
