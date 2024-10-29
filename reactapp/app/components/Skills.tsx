import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section className={styles.ul}>
            <h2>Skills</h2>
            <ul className="Skills">
                <li>Coding Languages: Unity, Python, Java, HTML, C, C++, UNIX</li>
                <li>Team Contribution</li>
                <li>Team Leadership</li>
                <li>Certified in Microsoft Office</li>
                <li>Product and Service Sales</li>
            </ul>
        </section>
    )
}