import styles from '../../styles/Home.module.css'
import Link from '../Link'
import {BASE_URL} from '../../settings'


export default function BottomNav(){
    
return (

    <footer className={styles.footer}>
 
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
   
      </footer>
)
    
}

