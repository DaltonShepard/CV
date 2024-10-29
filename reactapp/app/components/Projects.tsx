import Image from 'next/image';
import UnityLogo from '../public/images/Unity_2021.svg.png';
import API from '../public/images/API.png';
import HTML from '../public/images/HTMLimage.png';
import styles from './Projects.module.css';

interface Card {
    classname: string;
    img: string;
    children: React.ReactNode;
}

export default function Projects() {
    return (
        <section>
        <h2>Projects</h2>
        <div className={styles.threecol}>
        <div className={styles.card}> 
            <Image className={styles.projectimg} src={UnityLogo} alt="Unity-Logo" width="150" />
        <h3>Unity Coding</h3>
            <ul className={styles.ul}>
            <li>Creating Player Scripts that include collsions and movement animations.</li>
            <li>Creating Enviroment Scripts and creating enviroment models</li>
            <li>Creating many player models and using unity assets to create them</li>
        </ul>
        </div>
        <div className={styles.card}>
            <Image className={styles.projectimg} src={API} alt="API-image" width="150" />
            <h3>API Coding</h3>
        <ul className={styles.ul}>
            <li>Using free APIs to query search and show the result to the user in a nice UI format</li>
            <li>Connecting two APIs by using the result of one for the input of the other</li>
        </ul>
        </div>
        <div className={styles.card}>
            <Image className={styles.projectimg} src={HTML} alt="HTML-image" width="150" />
            <h3>HTML Coding</h3>
        <ul className={styles.ul}>
            <li>Creating websites from scratch</li>
            <li>Rebuilding/Editing a webiste from a starting point to include accessibility items</li>
            <li>Working in CSS and designing my projects from scratch</li>
        </ul>
        </div>    
        </div>
        </section>
    );
}