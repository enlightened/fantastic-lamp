import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <Image
            src="/logo.svg"
            alt="Lube Skywalker Logo"
            width={48}
            height={48}
            className={styles.logo}
            priority
          />
          <span className={styles.businessName}>
            Lube Skywalker Mechanic Shop Ltd
          </span>
        </div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#book" className={styles.ctaNav}>
            Book an Appointment
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          {/* Replace with your Star Wars themed background image */}
          <Image
            src="/hero-bg.jpg"
            alt="Star Wars themed background"
            fill
            style={{ objectFit: "cover" }}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>May the Force of Maintenance Be With Your Ride</h1>
          <a href="#book" className={styles.ctaHero}>
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>General Maintenance</h3>
            <p>
              Comprehensive check-ups and repairs to keep your vehicle in top condition.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Oil Change</h3>
            <p>
              Quick and efficient oil changes using high-quality products.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tire Replacement/Repair</h3>
            <p>
              Expert tire services, including replacements and repairs for all vehicle types.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Window Replacement</h3>
            <p>
              Professional window services ensuring safety and clarity.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Car Safety Inspection</h3>
            <p>
              Thorough safety inspections to ensure your vehicle meets all safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>
          Lube Skywalker Mechanic Shop Ltd has been a trusted name in the community for many years, providing top-notch automotive services with a commitment to quality and customer satisfaction. Our team of skilled mechanics is dedicated to ensuring your vehicle receives the best care possible.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerColLeft}>
            7 Millenium Falcon Drive, Ottawa, ON, R2D 2D1
          </div>
          <div className={styles.footerColCenter}>
            +1 (888) USE-THE4
          </div>
          <div className={styles.footerColRight}>
            luke@skywalker.shop
          </div>
        </div>
        <div className={styles.footerCopyright}>
          © 2024 Lube Skywalker Mechanic Shop Ltd
        </div>
      </footer>
    </div>
  );
}