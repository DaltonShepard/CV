import styles from './Leadership.module.css';

export default function Leadership() {
    return (
        <section>
        <h2>Leadership and Experience</h2>
        <dl className={styles.dl}>
            <dt>Classic City Catering, Athens, Ga</dt>
            <dd>January 2023 - Present</dd>
            <dt><a href="https://shop.fooddepot.com/">Food Depot Marketplace</a>, Cochran, Ga</dt>
            <dd>March 2020 - June 2022</dd>
            <dt>Warner Robins Air Force Base, Warner Robins, Ga</dt>
            <dd>June 2024 - August 2024</dd>
        </dl>       
        </section>
    )
}