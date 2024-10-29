import styles from './Footer.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { BiCopyright } from 'react-icons/bi';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <BiCopyright />
            <a href="contact.html">Dalton C. Shepard</a>
            •<CiLinkedin />
        </footer>
    );
}