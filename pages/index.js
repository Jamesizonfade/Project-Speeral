import styles from '../styles/Home.module.css'
import Navbar, {} from '../components/navbar'
import Intro from '../components/intro'
import Features from '../components/features'

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar/>
    <Intro/>
    <Features/>

      
    </div>
  )
}
