import Image from "next/image";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <a href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Lube Skywalker Logo"
            width={56}
            height={56}
            priority
          />
          <span className={styles.businessName}>
            Lube Skywalker Mechanic Shop
          </span>
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="/services" className={styles.navLink}>Services</a>
        <a href="/#about" className={styles.navLink}>About Us</a>
        <a href="/booking" className={styles.ctaNav}>
          Book an Appointment
        </a>
      </nav>
    </header>
  );
}