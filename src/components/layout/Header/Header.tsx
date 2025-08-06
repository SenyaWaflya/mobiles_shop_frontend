import Button from "@/components/ui/Button/Button";
import styles from './Header.module.css';
import LogoIcon from '@/assets/icons/logo.svg';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <section className={styles.headerSection}>
            <div className={styles.headerBlock}>
                <Link className={styles.logoIcon} href={'/'}>
                    <Image src={LogoIcon} alt={'logo icon'} height={70} width={70} />
                </Link>
                <div></div>
                <Button className={styles.contactButton} href="google.com">
                    rmbkrmkb
                </Button>
            </div>
        </section>
    )
}
