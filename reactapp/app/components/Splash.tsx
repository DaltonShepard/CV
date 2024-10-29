import Image from 'next/image';
import HeadShot from '../public/images/HeadShot.jpg';   
import styles from './Splash.module.css';

export default function Splash() {
    return (
        <div className={styles.splash}>    
            <h1 className={styles.h1}>Dalton Cole Shepard</h1>
            <Image src={HeadShot} alt="Dalton Shepard" width={200} height={200} />
            <p className={styles.p}>1005 Macon Highway Apt 112, 30606 • 478-559-0023 • dalton.shepard01@gmail.com</p>
            <p className={styles.p}>Responsible student with good judgment and time management looking for a career. 
            Aiming to leverage my abilities to successfully fill the vacancy at your company. 
             Frequently praised as hardworking by my peers, I can be relied upon to help your company achieve its goals.</p>
        </div>
    );
}