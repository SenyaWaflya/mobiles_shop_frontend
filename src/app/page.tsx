import styles from './page.module.css'
import Header from "@/components/layout/Header/Header";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
        </div>
    )
}
