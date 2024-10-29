import styles from './Honors.module.css';

export default function Honors() {
    return (
        <section>
        <h2>Honors and Awards</h2>
        <dl className={styles.dl}>
            <dt>Deans List</dt>
            <dd>Fall 2022 - Present</dd>
            <dt>Zell Miller Scolarship Recipient</dt>
            <dd>Fall 2020 - Present</dd>
        </dl>
    </section>
    )
}