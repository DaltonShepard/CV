import { Person } from '../page';
import styles from "./Nav.module.css";

export default function Nav({person}:{person: Person}) {
    return (
        <nav className={styles.nav}>
            <p>{person.firstName} {person.lastName}</p>
            <p><a href="contact.html">Contact {person.firstName}</a></p>
        </nav>
    );
}